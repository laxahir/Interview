import React from 'react';
import { useLocation } from 'react-router-dom';

const UserDetailPage = () => {
  const location = useLocation();
  const user = location.state?.user;

  if (!user) {
    return <p>Sorry, user not found.</p>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">User Details</h2>

        {/* User Profile Image */}
        <div className="flex flex-col items-center text-center mb-8">
          <img
            src={user.image}
            alt="User Profile"
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-600"
          />
          <h3 className="text-3xl font-semibold text-gray-800">{user.firstName} {user.lastName}</h3>
          <p className="text-indigo-600 text-lg">{user.email}</p>
        </div>

        {/* User Details Section */}
        <div className="space-y-4 text-left">
          {/* Basic Information */}
          <p className="text-lg">
            <strong className="font-medium text-gray-700">Username:</strong> {user.username}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">Phone:</strong> {user.phone}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">Age:</strong> {user.age}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">Gender:</strong> {user.gender}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">Blood Group:</strong> {user.bloodGroup}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">Eye Color:</strong> {user.eyeColor}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">Hair Color:</strong> {user.hair.color}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">Hair Type:</strong> {user.hair.type}
          </p>

          {/* Address Information */}
          <div className="text-lg">
            <strong className="font-medium text-gray-700">Address:</strong>
            <p>{user.address.address}</p>
            <p>{user.address.city}, {user.address.state} {user.address.postalCode}</p>
            <p>{user.address.country}</p>
          </div>

          {/* University */}
          <p className="text-lg">
            <strong className="font-medium text-gray-700">University:</strong> {user.university}
          </p>

          {/* Company Information */}
          {user.company && (
            <div className="text-lg">
              <strong className="font-medium text-gray-700">Company:</strong>
              <p>{user.company.name}</p>
              <p>{user.company.department}</p>
              <p>{user.company.title}</p>
              <p>{user.company.address.address}, {user.company.address.city}</p>
              <p>{user.company.address.state} {user.company.address.postalCode}</p>
            </div>
          )}

          {/* Bank Information */}
          <div className="text-lg">
            <strong className="font-medium text-gray-700">Bank:</strong>
            <p>Card Number: {user.bank.cardNumber}</p>
            <p>Card Type: {user.bank.cardType}</p>
            <p>Currency: {user.bank.currency}</p>
            <p>IBAN: {user.bank.iban}</p>
          </div>

          {/* Crypto Information */}
          <div className="text-lg">
            <strong className="font-medium text-gray-700">Crypto Wallet:</strong>
            <p>Coin: {user.crypto.coin}</p>
            <p>Wallet Address: {user.crypto.wallet}</p>
            <p>Network: {user.crypto.network}</p>
          </div>

          {/* Other Details */}
          <p className="text-lg">
            <strong className="font-medium text-gray-700">IP Address:</strong> {user.ip}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">MAC Address:</strong> {user.macAddress}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">SSN:</strong> {user.ssn}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">EIN:</strong> {user.ein}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">Role:</strong> {user.role}
          </p>
          <p className="text-lg">
            <strong className="font-medium text-gray-700">User Agent:</strong> {user.userAgent}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetailPage;

