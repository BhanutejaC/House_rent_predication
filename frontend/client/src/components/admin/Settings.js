import React, { useState } from 'react';

function AdminSettings() {
  const [settings, setSettings] = useState({
    siteName: 'House Rent Portal',
    contactEmail: 'admin@example.com',
    supportPhone: '+91 9876543210',
    maxListingsPerUser: '10',
    commissionRate: '5',
    maintenanceFee: '1000',
    verificationRequired: true,
    autoApproveListings: false,
    emailNotifications: true,
    smsNotifications: true
  });

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Settings updated:', settings);
    // Additional code to save settings to a backend can go here
  };

  return (
    <div className="space-y-6 p-8 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6">System Settings</h1>

      <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-6 space-y-6">
        {/* Site Name */}
        <div className="flex flex-col">
          <label htmlFor="siteName" className="font-medium text-gray-700">Site Name</label>
          <input
            type="text"
            id="siteName"
            name="siteName"
            value={settings.siteName}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Contact Email */}
        <div className="flex flex-col">
          <label htmlFor="contactEmail" className="font-medium text-gray-700">Contact Email</label>
          <input
            type="email"
            id="contactEmail"
            name="contactEmail"
            value={settings.contactEmail}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Support Phone */}
        <div className="flex flex-col">
          <label htmlFor="supportPhone" className="font-medium text-gray-700">Support Phone</label>
          <input
            type="text"
            id="supportPhone"
            name="supportPhone"
            value={settings.supportPhone}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Max Listings per User */}
        <div className="flex flex-col">
          <label htmlFor="maxListingsPerUser" className="font-medium text-gray-700">Max Listings per User</label>
          <input
            type="number"
            id="maxListingsPerUser"
            name="maxListingsPerUser"
            value={settings.maxListingsPerUser}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Commission Rate */}
        <div className="flex flex-col">
          <label htmlFor="commissionRate" className="font-medium text-gray-700">Commission Rate (%)</label>
          <input
            type="number"
            id="commissionRate"
            name="commissionRate"
            value={settings.commissionRate}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Maintenance Fee */}
        <div className="flex flex-col">
          <label htmlFor="maintenanceFee" className="font-medium text-gray-700">Maintenance Fee ($)</label>
          <input
            type="number"
            id="maintenanceFee"
            name="maintenanceFee"
            value={settings.maintenanceFee}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded"
          />
        </div>

        {/* Verification Required */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="verificationRequired"
            name="verificationRequired"
            checked={settings.verificationRequired}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600"
          />
          <label htmlFor="verificationRequired" className="text-gray-700">Require User Verification</label>
        </div>

        {/* Auto-Approve Listings */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="autoApproveListings"
            name="autoApproveListings"
            checked={settings.autoApproveListings}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600"
          />
          <label htmlFor="autoApproveListings" className="text-gray-700">Auto-Approve Listings</label>
        </div>

        {/* Email Notifications */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="emailNotifications"
            name="emailNotifications"
            checked={settings.emailNotifications}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600"
          />
          <label htmlFor="emailNotifications" className="text-gray-700">Enable Email Notifications</label>
        </div>

        {/* SMS Notifications */}
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="smsNotifications"
            name="smsNotifications"
            checked={settings.smsNotifications}
            onChange={handleChange}
            className="h-4 w-4 text-blue-600"
          />
          <label htmlFor="smsNotifications" className="text-gray-700">Enable SMS Notifications</label>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Save Settings
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminSettings;
