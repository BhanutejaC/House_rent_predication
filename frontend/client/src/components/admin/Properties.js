import React, { useState } from 'react';

function AdminProperties() {
  const [properties, setProperties] = useState([
    {
      id: 1,
      title: "Luxury Apartment",
      location: "Mumbai",
      owner: "Jane Smith",
      status: "Active",
      rent: 35000,
      verificationStatus: "Verified"
    },
    {
      id: 2,
      title: "Beach House",
      location: "Goa",
      owner: "John Doe",
      status: "Pending",
      rent: 50000,
      verificationStatus: "Pending"
    }
  ]);

  const [filter, setFilter] = useState({
    status: '',
    verification: '',
    search: ''
  });

  const handleVerification = (propertyId, status) => {
    setProperties(properties.map(property =>
      property.id === propertyId ? { ...property, verificationStatus: status } : property
    ));
  };

  const filteredProperties = properties.filter(property => {
    return (
      (!filter.status || property.status === filter.status) &&
      (!filter.verification || property.verificationStatus === filter.verification) &&
      (!filter.search ||
        property.title.toLowerCase().includes(filter.search.toLowerCase()) ||
        property.location.toLowerCase().includes(filter.search.toLowerCase()) ||
        property.owner.toLowerCase().includes(filter.search.toLowerCase()))
    );
  });

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Manage Properties</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Search properties..."
            className="border rounded-md p-2"
            value={filter.search}
            onChange={(e) => setFilter({ ...filter, search: e.target.value })}
          />
          <select
            className="border rounded-md p-2"
            value={filter.status}
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
          >
            <option value="">All Status</option>
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Inactive">Inactive</option>
          </select>
          <select
            className="border rounded-md p-2"
            value={filter.verification}
            onChange={(e) => setFilter({ ...filter, verification: e.target.value })}
          >
            <option value="">All Verification Status</option>
            <option value="Verified">Verified</option>
            <option value="Pending">Pending</option>
            <option value="Rejected">Rejected</option>
          </select>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Property</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Owner</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Rent</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Verification</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredProperties.map(property => (
                <tr key={property.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{property.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{property.location}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{property.owner}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${property.status === 'Active'
                        ? 'bg-green-100 text-green-800'
                        : property.status === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                      {property.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">₹{property.rent}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${property.verificationStatus === 'Verified'
                        ? 'bg-green-100 text-green-800'
                        : property.verificationStatus === 'Pending'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-red-100 text-red-800'
                      }`}>
                      {property.verificationStatus}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    {property.verificationStatus === 'Pending' && (
                      <div className="space-x-2">
                        <button
                          onClick={() => handleVerification(property.id, 'Verified')}
                          className="text-green-600 hover:text-green-900"
                        >
                          Verify
                        </button>
                        <button
                          onClick={() => handleVerification(property.id, 'Rejected')}
                          className="text-red-600 hover:text-red-900"
                        >
                          Reject
                        </button>
                      </div>
                    )}
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

export default AdminProperties;