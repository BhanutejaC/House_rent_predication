import React from 'react';

function LandlordDashboard() {
  const stats = [
    { label: 'Total Properties', value: '8' },
    { label: 'Active Listings', value: '5' },
    { label: 'Total Tenants', value: '12' },
    { label: 'Monthly Revenue', value: '₹125,000' }
  ];

  const recentRequests = [
    { id: 1, tenant: "Alice Smith", property: "Luxury Apartment", date: "2024-01-15", status: "Pending" },
    { id: 2, tenant: "Bob Johnson", property: "Beach House", date: "2024-01-14", status: "Approved" }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Landlord Dashboard</h1>

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
          <h2 className="text-xl font-semibold mb-4">Recent Requests</h2>
          <div className="space-y-4">
            {recentRequests.map(request => (
              <div key={request.id} className="flex items-center justify-between border-b pb-4">
                <div>
                  <h3 className="font-semibold">{request.tenant}</h3>
                  <p className="text-sm text-gray-600">{request.property}</p>
                  <p className="text-xs text-gray-500">{request.date}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${request.status === 'Approved' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                  }`}>
                  {request.status}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-4">Revenue Overview</h2>
          <div className="space-y-4">
            <div className="h-48 bg-gray-100 rounded flex items-center justify-center">
              [Revenue Chart Placeholder]
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandlordDashboard;