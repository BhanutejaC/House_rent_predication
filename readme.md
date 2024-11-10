
This is a house rent prediction web application and  a role-based system, and a machine learning model to estimate rental prices. The project is built with Next.js, MongoDB, and a rent prediction model hosted via Flask/FastAPI.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Setup Instructions](#setup-instructions)
- [Backend Setup (Flask API)](#backend-setup-flask-api)
- [Frontend Setup (Next.js)](#frontend-setup-nextjs)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

The app allows users to:
- Browse available properties.
- Make rental price predictions using a trained machine learning model.
- Experience personalized views based on their role (Renter, Admin, or Landlord).

## Features
- **Machine Learning Model**: A predictive model estimates rental prices based on property details.
- **Role-Based Access**: Different user roles (Renter, Admin, Landlord) with tailored interfaces.
- **Modern UI**: Responsive, dark-themed interface inspired by Airbnb.

## Tech Stack
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Flask/FastAPI, MongoDB
- **Deployment**: Vercel (Frontend), Render or other hosting (Backend)
- **Database**: MongoDB

## Setup Instructions

### Prerequisites
- **Node.js**: Version 14.x or higher
- **Python**: Version 3.7 or higher
- **MongoDB**: Installed and running
- **Flask** (for the backend API): `pip install flask`

### Project Structure
```plaintext
project-root/
├── frontend/         # Next.js frontend
├── backend/          # Flask API for rent prediction
│   └── models/       # Folder containing the trained model
│       └── model.h5  # Trained Keras model for rent prediction
├── data/             # Contains the trained model and data files
└── README.md         # Project instructions


After starting this backend and then start the frontend

cd backend
python3 -m venv venv
source venv/bin/activate   # On Windows, use `venv\Scripts\activate`
pip install -r requirements.txt



cd frontend/client
npm install
npm start

use localhost:3000/predict to view predict 
localhost:3000/register -- after register do the login
localhost:3000/login 


###Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes and commit (git commit -m 'Add feature').
Push to the branch (git push origin feature-branch).
Open a Pull Request.


