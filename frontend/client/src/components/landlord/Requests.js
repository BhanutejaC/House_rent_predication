import React from 'react';

function LandlordRequests() {
  const requests = [
    {
      id: 1,
      tenant: {
        name: "Alice Smith",
        email: "alice@example.com",
        phone: "+91 9876543210",
        occupation: "Software Engineer"
      },
      property: "Luxury Apartment",
      requestDate: "2024-01-15",
      moveInDate: "2024-02-01",
      status: "Pending",
      message: "I'm interested in renting this apartment for a long-term stay."
    },
    {
      id: 2,
      tenant: {
        name: "Bob Johnson",
        email: "bob@example.com",
        phone: "+91 9876543211",
        occupation: "Doctor"
      },
      property: "Beach House",
      requestDate: "2024-01-14",
      moveInDate: "2024-03-01",
      status: "Approved",
      message: "Looking for a peaceful place near the beach."
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Rental Requests</h1>

      <div className="space-y-4">
        {requests.map(request => (
          <div key={request.id} className="bg-white rounded-lg shadow p-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-semibold">{request.property}</h3>
                <p className="text-gray-600">Request Date: {request.requestDate}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm ${request.status === 'Approved'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
                }`}>
                {request.status}
              </span>
            </div>

            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">Tenant Details</h4>
                <p className="text-gray-600">{request.tenant.name}</p>
                <p className="text-gray-600">{request.tenant.email}</p>
                <p className="text-gray-600">{request.tenant.phone}</p>
                <p className="text-gray-600">{request.tenant.occupation}</p>
              </div>
              <div>
                <h4 className="font-medium">Request Details</h4>
                <p className="text-gray-600">Move-in Date: {request.moveInDate}</p>
                <p className="text-gray-600 mt-2">{request.message}</p>
              </div>
            </div>

            {request.status === 'Pending' && (
              <div className="mt-6 flex space-x-4">
                <button className="flex-1 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                  Approve
                </button>
                <button className="flex-1 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
                  Reject
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandlordRequests;
