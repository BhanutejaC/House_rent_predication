import React from 'react';

function LandlordProperties() {
  const properties = [
    {
      id: 1,
      title: "Luxury Apartment",
      address: "123 Main St, Mumbai",
      type: "Apartment",
      bedrooms: 3,
      bathrooms: 2,
      rent: 35000,
      status: "Occupied",
      tenant: "John Doe",
      leaseEnd: "2024-06-30"
    },
    {
      id: 2,
      title: "Beach House",
      address: "456 Beach Road, Goa",
      type: "Villa",
      bedrooms: 4,
      bathrooms: 3,
      rent: 50000,
      status: "Available",
      tenant: null,
      leaseEnd: null
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Properties</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Add New Property
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {properties.map(property => (
          <div key={property.id} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold">{property.title}</h3>
                  <p className="text-gray-600">{property.address}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm ${property.status === 'Occupied' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                  }`}>
                  {property.status}
                </span>
              </div>

              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-600">Property Type</p>
                  <p className="font-medium">{property.type}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Monthly Rent</p>
                  <p className="font-medium">₹{property.rent}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Bedrooms</p>
                  <p className="font-medium">{property.bedrooms}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-600">Bathrooms</p>
                  <p className="font-medium">{property.bathrooms}</p>
                </div>
              </div>

              {property.tenant && (
                <div className="mt-4 pt-4 border-t">
                  <p className="text-sm text-gray-600">Current Tenant</p>
                  <p className="font-medium">{property.tenant}</p>
                  <p className="text-sm text-gray-600 mt-2">Lease Ends</p>
                  <p className="font-medium">{property.leaseEnd}</p>
                </div>
              )}

              <div className="mt-6 flex space-x-4">
                <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                  Edit
                </button>
                <button className="flex-1 border border-gray-300 px-4 py-2 rounded hover:bg-gray-50">
                  View Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LandlordProperties;