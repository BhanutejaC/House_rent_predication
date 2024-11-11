import React, { useState } from 'react';

function RenterSearch() {
  const [filters, setFilters] = useState({
    location: '',
    priceRange: '',
    bedrooms: '',
    propertyType: ''
  });

  const properties = [
    {
      id: 1,
      title: "Modern Apartment in City Center",
      location: "Mumbai",
      price: 25000,
      bedrooms: 2,
      bathrooms: 2,
      image: "https://placehold.co/600x400",
      rating: 4.5
    },
    {
      id: 2,
      title: "Luxury Villa with Pool",
      location: "Bangalore",
      price: 45000,
      bedrooms: 3,
      bathrooms: 3,
      image: "https://placehold.co/600x400",
      rating: 4.8
    }
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Location"
            className="p-2 border rounded"
            value={filters.location}
            onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          />
          <select
            className="p-2 border rounded"
            value={filters.priceRange}
            onChange={(e) => setFilters({ ...filters, priceRange: e.target.value })}
          >
            <option value="">Price Range</option>
            <option value="0-20000">₹0 - ₹20,000</option>
            <option value="20000-40000">₹20,000 - ₹40,000</option>
            <option value="40000+">₹40,000+</option>
          </select>
          <select
            className="p-2 border rounded"
            value={filters.bedrooms}
            onChange={(e) => setFilters({ ...filters, bedrooms: e.target.value })}
          >
            <option value="">Bedrooms</option>
            <option value="1">1 BHK</option>
            <option value="2">2 BHK</option>
            <option value="3">3 BHK</option>
            <option value="4+">4+ BHK</option>
          </select>
          <select
            className="p-2 border rounded"
            value={filters.propertyType}
            onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
          >
            <option value="">Property Type</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="villa">Villa</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map(property => (
          <div key={property.id} className="bg-white rounded-lg shadow overflow-hidden">
            <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold">{property.title}</h3>
              <p className="text-gray-600">{property.location}</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="text-xl font-bold">₹{property.price}</span>
                <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {property.rating} ★
                </span>
              </div>
              <div className="mt-4 flex justify-between">
                <span className="text-sm text-gray-600">{property.bedrooms} Beds</span>
                <span className="text-sm text-gray-600">{property.bathrooms} Baths</span>
                <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RenterSearch;