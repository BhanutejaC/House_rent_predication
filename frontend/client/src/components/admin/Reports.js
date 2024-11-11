import React, { useState } from 'react';

function AdminReports() {
  const [selectedReport, setSelectedReport] = useState('bookings');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });

  const reports = {
    bookings: [
      { month: 'January', count: 45, revenue: 125000 },
      { month: 'February', count: 52, revenue: 145000 },
      { month: 'March', count: 38, revenue: 98000 }
    ],
    properties: [
      { type: 'Apartment', count: 85, percentage: 45 },
      { type: 'House', count: 65, percentage: 35 },
      { type: 'Villa', count: 38, percentage: 20 }
    ],
    users: [
      { role: 'Renters', count: 150, active: 120 },
      { role: 'Landlords', count: 75, active: 65 },
      { role: 'Admins', count: 5, active: 5 }
    ]
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Reports & Analytics</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="space-x-4">
            {Object.keys(reports).map(reportType => (
              <button
                key={reportType}
                className={`px-4 py-2 rounded-md ${selectedReport === reportType
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100'}`}
                onClick={() => setSelectedReport(reportType)}
              >
                {reportType.charAt(0).toUpperCase() + reportType.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex space-x-4">
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) => setDateRange({ ...dateRange, start: e.target.value })}
              className="border rounded-md p-2"
            />
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) => setDateRange({ ...dateRange, end: e.target.value })}
              className="border rounded-md p-2"
            />
          </div>
        </div>

        {/* Conditionally render reports */}
        {selectedReport === 'bookings' && (
          <BookingReport bookings={reports.bookings} />
        )}
        {selectedReport === 'properties' && (
          <PropertiesReport properties={reports.properties} />
        )}
        {selectedReport === 'users' && (
          <UsersReport users={reports.users} />
        )}
      </div>
    </div>
  );
}

// Separate components for each report section
const BookingReport = ({ bookings }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Booking Reports</h2>
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Bookings</th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Revenue</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {bookings.map((item, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{item.month}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.count}</td>
              <td className="px-6 py-4 whitespace-nowrap">₹{item.revenue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

const PropertiesReport = ({ properties }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">Property Distribution</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {properties.map((item, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold">{item.type}</h3>
          <p className="text-2xl font-bold">{item.count}</p>
          <p className="text-gray-600">{item.percentage}% of total</p>
        </div>
      ))}
    </div>
  </div>
);

const UsersReport = ({ users }) => (
  <div>
    <h2 className="text-xl font-semibold mb-4">User Statistics</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {users.map((item, index) => (
        <div key={index} className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold">{item.role}</h3>
          <p className="text-2xl font-bold">{item.count}</p>
          <p className="text-gray-600">{item.active} active users</p>
        </div>
      ))}
    </div>
  </div>
);

export default AdminReports;
