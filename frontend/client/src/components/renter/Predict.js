// src/components/renter/Predict.js
import React, { useState } from 'react';
import axios from 'axios';

function Predict() {
  const [BHK, setBHK] = useState(1);
  const [Size, setSize] = useState(500);
  const [AreaType, setAreaType] = useState("Super Area");
  const [City, setCity] = useState("Mumbai");
  const [FurnishingStatus, setFurnishingStatus] = useState("Unfurnished");
  const [TenantPreferred, setTenantPreferred] = useState("Bachelors/Family");
  const [Bathroom, setBathroom] = useState(1);
  const [Rent, setRent] = useState(null);
  const [loading, setLoading] = useState(false);

  const areaTypeMap = { "Super Area": 1, "Carpet Area": 2, "Built Area": 3 };
  const cityMap = { "Mumbai": 4000, "Chennai": 6000, "Bangalore": 5600, "Hyderabad": 5000, "Delhi": 1100, "Kolkata": 7000 };
  const furnishingStatusMap = { "Unfurnished": 0, "Semi-Furnished": 1, "Furnished": 2 };
  const tenantPreferredMap = { "Bachelors/Family": 2, "Bachelors": 1, "Family": 3 };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const inputData = {
      BHK: parseInt(BHK),
      Size: parseFloat(Size),
      AreaType: areaTypeMap[AreaType] || 0,
      City: cityMap[City] || 0,
      FurnishingStatus: furnishingStatusMap[FurnishingStatus] || 0,
      TenantPreferred: tenantPreferredMap[TenantPreferred] || 0,
      Bathroom: parseInt(Bathroom),
    };

    try {
      const response = await axios.post('http://localhost:5000/predict', inputData);
      if (response.data && response.data.Rent) {
        setRent(response.data.Rent);
      } else {
        setRent("Error: Invalid response format");
      }
    } catch (error) {
      console.error("Error fetching rent prediction:", error);
      setRent("Error predicting rent");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-xl text-white">
      <h2 className="text-4xl font-extrabold text-center mb-8">Rent Prediction</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="BHK" className="block text-sm font-medium">BHK</label>
            <input type="number" id="BHK" value={BHK} onChange={(e) => setBHK(e.target.value)} className="mt-2 p-2 w-full text-gray-800" />
          </div>
          <div>
            <label htmlFor="Size" className="block text-sm font-medium">Size (sq. ft.)</label>
            <input type="number" id="Size" value={Size} onChange={(e) => setSize(e.target.value)} className="mt-2 p-2 w-full text-gray-800" />
          </div>
        </div>

        {/* Area Type, City, Furnishing Status, Tenant Preferred, Bathroom fields */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="AreaType" className="block text-sm font-medium">Area Type</label>
            <select id="AreaType" value={AreaType} onChange={(e) => setAreaType(e.target.value)} className="mt-2 p-2 w-full text-gray-800">
              <option value="Super Area">Super Area</option>
              <option value="Carpet Area">Carpet Area</option>
              <option value="Built Area">Built Area</option>
            </select>
          </div>
          <div>
            <label htmlFor="City" className="block text-sm font-medium">City</label>
            <select id="City" value={City} onChange={(e) => setCity(e.target.value)} className="mt-2 p-2 w-full text-gray-800">
              <option value="Mumbai">Mumbai</option>
              <option value="Chennai">Chennai</option>
              <option value="Bangalore">Bangalore</option>
              <option value="Hyderabad">Hyderabad</option>
              <option value="Delhi">Delhi</option>
              <option value="Kolkata">Kolkata</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="FurnishingStatus" className="block text-sm font-medium">Furnishing Status</label>
            <select id="FurnishingStatus" value={FurnishingStatus} onChange={(e) => setFurnishingStatus(e.target.value)} className="mt-2 p-2 w-full text-gray-800">
              <option value="Unfurnished">Unfurnished</option>
              <option value="Semi-Furnished">Semi-Furnished</option>
              <option value="Furnished">Furnished</option>
            </select>
          </div>
          <div>
            <label htmlFor="TenantPreferred" className="block text-sm font-medium">Tenant Preferred</label>
            <select id="TenantPreferred" value={TenantPreferred} onChange={(e) => setTenantPreferred(e.target.value)} className="mt-2 p-2 w-full text-gray-800">
              <option value="Bachelors/Family">Bachelors/Family</option>
              <option value="Bachelors">Bachelors</option>
              <option value="Family">Family</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="Bathroom" className="block text-sm font-medium">Bathroom</label>
            <input type="number" id="Bathroom" value={Bathroom} onChange={(e) => setBathroom(e.target.value)} className="mt-2 p-2 w-full text-gray-800" />
          </div>
        </div>

        <div className="mt-6 flex justify-center items-center space-x-4">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-md" disabled={loading}>
            {loading ? 'Predicting...' : 'Predict Rent'}
          </button>
        </div>

        {Rent && (
          <div className="mt-6 text-center text-lg">
            <strong>Predicted Rent: ₹{Rent}</strong>
          </div>
        )}
      </form>
    </div>
  );
}

export default Predict;
