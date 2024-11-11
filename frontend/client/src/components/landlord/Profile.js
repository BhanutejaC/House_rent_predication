import React, { useState } from 'react';

function LandlordProfile() {
  const [profile, setProfile] = useState({
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+91 9876543210',
    address: 'Mumbai, India',
    bankAccount: '1234567890',
    ifscCode: 'ABCD0123456',
    panCard: 'ABCDE1234F',
    gstNumber: '29ABCDE1234F1Z5'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile updated:', profile);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Landlord Profile</h1>

      <div className="bg-white rounded-lg shadow p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="flex items-center justify-center mb-6">
            <div className="relative">
              <img
                src="https://placehold.co/100x100"
                alt="Profile"
                className="w-24 h-24 rounded-full"
              />
              <button className="absolute bottom-0 right-0 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700">
                📷
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={profile.name}
                onChange={(e) => setProfile({ ...profile, name: e.target.value })}
                className="mt-1 block w-full border rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                value={profile.email}
                onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                className="mt-1 block w-full border rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <input
                type="tel"
                value={profile.phone}
                onChange={(e) => setProfile({ ...profile, phone: e.target.value })}
                className="mt-1 block w-full border rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Address</label>
              <input
                type="text"
                value={profile.address}
                onChange={(e) => setProfile({ ...profile, address: e.target.value })}
                className="mt-1 block w-full border rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Bank Account Number</label>
              <input
                type="text"
                value={profile.bankAccount}
                onChange={(e) => setProfile({ ...profile, bankAccount: e.target.value })}
                className="mt-1 block w-full border rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">IFSC Code</label>
              <input
                type="text"
                value={profile.ifscCode}
                onChange={(e) => setProfile({ ...profile, ifscCode: e.target.value })}
                className="mt-1 block w-full border rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">PAN Card</label>
              <input
                type="text"
                value={profile.panCard}
                onChange={(e) => setProfile({ ...profile, panCard: e.target.value })}
                className="mt-1 block w-full border rounded-md shadow-sm p-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">GST Number</label>
              <input
                type="text"
                value={profile.gstNumber}
                onChange={(e) => setProfile({ ...profile, gstNumber: e.target.value })}
                className="mt-1 block w-full border rounded-md shadow-sm p-2"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LandlordProfile;