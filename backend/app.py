from flask import Flask, jsonify, request
import numpy as np
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash
from flask_sqlalchemy import SQLAlchemy
import logging
import os
from keras.models import load_model

# Initialize Flask app
app = Flask(__name__)
CORS(app)

# Ensure the 'instance' folder exists
instance_path = os.path.join(os.path.abspath(os.path.dirname(__file__)), 'instance')
if not os.path.exists(instance_path):
    os.makedirs(instance_path)

# Configure database URI and settings
app.config['SQLALCHEMY_DATABASE_URI'] = f'sqlite:///{os.path.join(instance_path, "users.db")}'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Logging setup for debugging
logging.basicConfig(level=logging.DEBUG)

# Initialize the model
model = None

def load_model_once():
    global model
    if model is None:
        try:
            model_path = "D:/streamlit/houserent_predictor/model/model.h5"  # Ensure this path is correct based on your file structure
            if os.path.exists(model_path):
                model = load_model(model_path)
                logging.info("Model loaded successfully")
            else:
                logging.error(f"Model file not found at {model_path}")
        except Exception as e:
            logging.error(f"Error loading model: {e}")

# Call the model load function during the app initialization
load_model_once()

# User model definition
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(150), nullable=False)
    role = db.Column(db.String(50), nullable=False)

# Route to register a new user
@app.route('/register', methods=['POST'])
def register():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    role = data.get('role')

    # Validate input data
    if not username or not password or not role:
        return jsonify({"message": "Missing fields"}), 400

    # Check if the username is already taken
    if User.query.filter_by(username=username).first():
        return jsonify({"message": "Username already taken"}), 409

    # Hash the password before storing it
    hashed_password = generate_password_hash(password)
    new_user = User(username=username, password=hashed_password, role=role)

    # Add the new user to the database
    try:
        db.session.add(new_user)
        db.session.commit()
        return jsonify({"message": "User created successfully"}), 201
    except Exception as e:
        logging.error(f"Error adding user: {e}")
        return jsonify({"message": "Error creating user"}), 500

# Route to login user
@app.route('/login', methods=['POST'])
def login():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    # Validate input data
    if not username or not password:
        return jsonify({'message': 'Missing fields!'}), 400

    # Fetch user from the database
    user = User.query.filter_by(username=username).first()

    if user and check_password_hash(user.password, password):
        return jsonify({'message': 'Login successful', 'role': user.role}), 200
    else:
        return jsonify({'message': 'Invalid username or password'}), 401

# Helper function to preprocess input data for rent prediction
def preprocess_data(data):
    area_type_map = {"Super Area": 1, "Carpet Area": 2, "Built Area": 3}
    city_map = {"Mumbai": 4000, "Chennai": 6000, "Bangalore": 5600, "Hyderabad": 5000, "Delhi": 1100, "Kolkata": 7000}
    furnishing_status_map = {"Unfurnished": 0, "Semi-Furnished": 1, "Furnished": 2}
    tenant_preferred_map = {"Bachelors/Family": 2, "Bachelors": 1, "Family": 3}

    # Map input data to numeric values
    AreaType = area_type_map.get(data['AreaType'], 0)
    City = city_map.get(data['City'], 0)
    FurnishingStatus = furnishing_status_map.get(data['FurnishingStatus'], 0)
    TenantPreferred = tenant_preferred_map.get(data['TenantPreferred'], 0)

    # Create a numpy array for model prediction
    input_data = np.array([[data['BHK'], data['Size'], AreaType, City, FurnishingStatus, TenantPreferred, data['Bathroom']]])

    return input_data

# Route to make a rent prediction
@app.route('/predict', methods=['POST'])
def predict():
    try:
        # Get the input data from the frontend
        data = request.get_json()

        # Prepare the input features as a numpy array
        input_features = preprocess_data(data)

        # Make the prediction using your model
        rent_prediction = model.predict(input_features)

        # Ensure prediction is a float and return as JSON
        rent_prediction = float(rent_prediction[0])  # Convert NumPy float to Python float

        # Return the predicted rent as a response in the correct JSON format
        return jsonify({"Rent": rent_prediction})

    except Exception as e:
        # If an error occurs, return the error message as a response
        return jsonify({"error": str(e)}), 500
    
# Initialize database (create tables) and start the app
if __name__ == '__main__':
    try:
        # Create tables inside application context
        with app.app_context():
            db.create_all()  # Ensures tables are created within the app context
            logging.info("Database initialized and tables created if not present.")
    except Exception as e:
        logging.error(f"Error initializing the database: {e}")

    # Start the Flask application
    app.run(debug=True, host='0.0.0.0', port=5000)
