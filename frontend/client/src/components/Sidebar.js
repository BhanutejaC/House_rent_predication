import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Sidebar({ role }) {
  const location = useLocation();

  const menuItems = {
    renter: [
      { path: '/renter/dashboard', icon: '🏠', label: 'Dashboard' },
      { path: '/renter/search', icon: '🔍', label: 'Search Houses' },
      { path: '/renter/bookings', icon: '📅', label: 'My Bookings' },
      { path: '/renter/predict', icon: '📊', label: 'Predict Rent' },
      { path: '/renter/profile', icon: '👤', label: 'Profile' },
    ],
    landlord: [
      { path: '/landlord/dashboard', icon: '🏠', label: 'Dashboard' },
      { path: '/landlord/properties', icon: '🏘️', label: 'My Properties' },
      { path: '/landlord/listings', icon: '📝', label: 'Create Listing' },
      { path: '/landlord/requests', icon: '📨', label: 'Rental Requests' },
      { path: '/landlord/profile', icon: '👤', label: 'Profile' },
    ],
    admin: [
      { path: '/admin/dashboard', icon: '🏠', label: 'Dashboard' },
      { path: '/admin/users', icon: '👥', label: 'Manage Users' },
      { path: '/admin/properties', icon: '🏘️', label: 'All Properties' },
      { path: '/admin/reports', icon: '📊', label: 'Reports' },
      { path: '/admin/settings', icon: '⚙️', label: 'Settings' },
    ],
  };

  const items = menuItems[role] || [];

  return (
    <div className="bg-gray-800 text-white w-64 min-h-screen p-4">
      <div className="text-xl font-bold mb-8 p-2">House Rent Portal</div>
      <nav>
        {items.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-3 p-3 rounded-lg mb-2 ${location.pathname === item.path
                ? 'bg-blue-600'
                : 'hover:bg-gray-700'
              }`}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}

export default Sidebar;