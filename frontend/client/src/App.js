import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Predict from './components/renter/Predict';
import Layout from './components/Layout';

// Renter Components
import RenterDashboard from './components/renter/Dashboard';
import RenterSearch from './components/renter/Search';
import RenterBookings from './components/renter/Bookings';
import RenterProfile from './components/renter/Profile';
import RenterPredict from './components/renter/Predict';

// Landlord Components
import LandlordDashboard from './components/landlord/Dashboard';
import LandlordProperties from './components/landlord/Properties';
import LandlordListings from './components/landlord/Listings';
import LandlordRequests from './components/landlord/Requests';
import LandlordProfile from './components/landlord/Profile';

// Admin Components
import AdminDashboard from './components/admin/Dashboard';
import AdminUsers from './components/admin/Users';
import AdminProperties from './components/admin/Properties';
import AdminReports from './components/admin/Reports';
import AdminSettings from './components/admin/Settings';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Renter Routes */}
        <Route path="/renter/*" element={
          <Layout role="renter">
            <Routes>
              <Route path="dashboard" element={<RenterDashboard />} />
              <Route path="search" element={<RenterSearch />} />
              <Route path="bookings" element={<RenterBookings />} />
              <Route path="predict" element={<Predict />} />
              <Route path="profile" element={<RenterProfile />} />
            </Routes>
          </Layout>
        } />

        {/* Landlord Routes */}
        <Route path="/landlord/*" element={
          <Layout role="landlord">
            <Routes>
              <Route path="dashboard" element={<LandlordDashboard />} />
              <Route path="properties" element={<LandlordProperties />} />
              <Route path="listings" element={<LandlordListings />} />
              <Route path="requests" element={<LandlordRequests />} />
              <Route path="profile" element={<LandlordProfile />} />
            </Routes>
          </Layout>
        } />

        {/* Admin Routes */}
        <Route path="/admin/*" element={
          <Layout role="admin">
            <Routes>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="users" element={<AdminUsers />} />
              <Route path="properties" element={<AdminProperties />} />
              <Route path="reports" element={<AdminReports />} />
              <Route path="settings" element={<AdminSettings />} />
            </Routes>
          </Layout>
        } />

        {/* Default redirect */}
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;