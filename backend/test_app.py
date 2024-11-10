from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash
import os

# Initialize Flask app and SQLAlchemy
app = Flask(__name__)

# Configure database URI (update path as needed)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///D:/streamlit/houserent_predictor/backend/instance/users.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

# Define the User model for the database
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(150), nullable=False, unique=True)
    password = db.Column(db.String(150), nullable=False)
    role = db.Column(db.String(50), nullable=False)

# Initialize the database (create tables)
def initialize_database():
    with app.app_context():
        db.create_all()
        print("Database initialized and tables created.")

# Function to add a new user to the database
def add_user(username, password, role):
    with app.app_context():
        # Hash the password before storing
        hashed_password = generate_password_hash(password)
        user = User(username=username, password=hashed_password, role=role)

        # Add user to session and commit to the database
        db.session.add(user)
        db.session.commit()
        print(f"User '{username}' added successfully.")

# Function to retrieve all users for verification
def get_all_users():
    with app.app_context():
        users = User.query.all()
        for user in users:
            print(f"ID: {user.id}, Username: {user.username}, Role: {user.role}")

# Initialize database and add a sample user
if __name__ == '__main__':
    initialize_database()

    # Test adding a user
    add_user("test_user", "securepassword123", "user")

    # Verify by listing all users
    print("\nCurrent users in the database:")
    get_all_users()
  