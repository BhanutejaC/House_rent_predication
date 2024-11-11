import React from 'react';

function AdminDashboard() {
  const stats = [
    { label: 'Total Users', value: '245' },
    { label: 'Active Properties', value: '128' },
    { label: 'Total Bookings', value: '89' },
    { label: 'Revenue', value: '₹450,000' }
  ];

  const recentActivities = [
    { id: 1, action: "New Property Listed", user: "John Doe", time: "2 hours ago" },
    { id: 2, action: "Booking Confirmed", user: "Alice Smith", time: "5 hours ago" },
    { id: 3, action: "New User Registration", user: "Bob Johnson", time: "1 day ago" }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow">
            <h3 className="text-lg font-semibold text-gray-600">{stat.label}</h3>
            <p className="text-3xl font-bold text-blue-600 mt-2">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
          <div className="space-y-4">
            {recentActivities.map(activity => (
              <div key={activity.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h3 className="font-semibold">{activity.action}</h3>
                  <p className="text-sm text-gray-600">by {activity.user}</p>
                </div>
                <span className="text-sm text-gray-500">{activity.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">System Status</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Server Status</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Operational
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Database Status</span>
              <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                Connected
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span>Last Backup</span>
              <span className="text-sm text-gray-600">2 hours ago</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;
