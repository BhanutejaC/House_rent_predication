from tensorflow.keras.models import load_model
import numpy as np

# Load the model using the absolute path
model = load_model('D:/streamlit/houserent_predictor/model/model.h5')

# Example input data (replace with real test data)
test_input = np.array([[2, 1000, 1, 4000, 1, 2, 1]])  # Replace with a valid input shape

# Predict using the model
prediction = model.predict(test_input)
print("Prediction:", prediction)
