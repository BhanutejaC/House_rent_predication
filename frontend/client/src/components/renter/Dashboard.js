import React from 'react';

function RenterDashboard() {
  const recentBookings = [
    { id: 1, property: "Luxury Apartment", date: "2024-01-15", status: "Confirmed" },
    { id: 2, property: "Beach House", date: "2024-02-01", status: "Pending" }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Welcome Back!</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Active Bookings</h3>
          <p className="text-3xl font-bold text-blue-600">3</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Saved Properties</h3>
          <p className="text-3xl font-bold text-blue-600">12</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Recent Searches</h3>
          <p className="text-3xl font-bold text-blue-600">8</p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Bookings</h2>
        <div className="space-y-4">
          {recentBookings.map(booking => (
            <div key={booking.id} className="flex items-center justify-between border-b pb-4">
              <div>
                <h3 className="font-semibold">{booking.property}</h3>
                <p className="text-gray-600">Date: {booking.date}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                }`}>
                {booking.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RenterDashboard;