import React, { useState } from 'react';

function LandlordListings() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    propertyType: '',
    bedrooms: '',
    bathrooms: '',
    rent: '',
    deposit: '',
    location: '',
    amenities: [],
    furnishingStatus: '',
    preferredTenant: '',
    availableFrom: ''
  });

  const amenitiesOptions = [
    'Parking', 'Swimming Pool', 'Gym', 'Security',
    'Power Backup', 'Lift', 'Gas Pipeline', 'Club House'
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleAmenityToggle = (amenity) => {
    setFormData(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Create New Listing</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow p-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Property Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Title</label>
            <input
              type="text"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="mt-1 block w-full border rounded-md shadow-sm p-2"
              required
            />
          </div>
          {/* Property Type Select */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Property Type</label>
            <select
              value={formData.propertyType}
              onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
              className="mt-1 block w-full border rounded-md shadow-sm p-2"
              required
            >
              <option value="">Select Type</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
              <option value="villa">Villa</option>
            </select>
          </div>
          {/* Bedrooms Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Bedrooms</label>
            <input
              type="number"
              value={formData.bedrooms}
              onChange={(e) => setFormData({ ...formData, bedrooms: e.target.value })}
              className="mt-1 block w-full border rounded-md shadow-sm p-2"
              required
            />
          </div>
          {/* Bathrooms Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Bathrooms</label>
            <input
              type="number"
              value={formData.bathrooms}
              onChange={(e) => setFormData({ ...formData, bathrooms: e.target.value })}
              className="mt-1 block w-full border rounded-md shadow-sm p-2"
              required
            />
          </div>
          {/* Monthly Rent Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Monthly Rent (₹)</label>
            <input
              type="number"
              value={formData.rent}
              onChange={(e) => setFormData({ ...formData, rent: e.target.value })}
              className="mt-1 block w-full border rounded-md shadow-sm p-2"
              required
            />
          </div>
          {/* Security Deposit Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Security Deposit (₹)</label>
            <input
              type="number"
              value={formData.deposit}
              onChange={(e) => setFormData({ ...formData, deposit: e.target.value })}
              className="mt-1 block w-full border rounded-md shadow-sm p-2"
              required
            />
          </div>
        </div>
        {/* Description Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Description</label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows="4"
            className="mt-1 block w-full border rounded-md shadow-sm p-2"
            required
          ></textarea>
        </div>
        {/* Amenities Checklist */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Amenities</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenitiesOptions.map(amenity => (
              <label key={amenity} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.amenities.includes(amenity)}
                  onChange={() => handleAmenityToggle(amenity)}
                  className="rounded"
                />
                <span className="text-sm">{amenity}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Available From Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700">Available From</label>
          <input
            type="date"
            value={formData.availableFrom}
            onChange={(e) => setFormData({ ...formData, availableFrom: e.target.value })}
            className="mt-1 block w-full border rounded-md shadow-sm p-2"
            required
          />
        </div>
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Create Listing
          </button>
        </div>
      </form>
    </div>
  );
}

export default LandlordListings;
