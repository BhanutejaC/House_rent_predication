import React from 'react';

function RenterBookings() {
  const bookings = [
    {
      id: 1,
      property: "Luxury Apartment",
      location: "Mumbai",
      startDate: "2024-01-15",
      endDate: "2024-02-15",
      status: "Active",
      amount: 25000,
      landlord: "John Doe"
    },
    {
      id: 2,
      property: "Beach House",
      location: "Goa",
      startDate: "2024-03-01",
      endDate: "2024-04-01",
      status: "Upcoming",
      amount: 35000,
      landlord: "Jane Smith"
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">My Bookings</h1>

      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Dates</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {bookings.map(booking => (
                <tr key={booking.id}>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{booking.property}</div>
                    <div className="text-sm text-gray-500">by {booking.landlord}</div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{booking.location}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {booking.startDate} to {booking.endDate}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-900">₹{booking.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${booking.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-yellow-100 text-yellow-800'
                      }`}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900">View Details</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default RenterBookings;