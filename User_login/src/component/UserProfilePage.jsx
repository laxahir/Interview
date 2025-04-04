import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserProfilePage = ({ loggedInUser }) => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://dummyjson.com/users');
        setUsers(response.data.users);
      } catch (err) {
        console.error('Error fetching users: ', err);
      }
    };

    fetchUsers();
  }, []);

  const handleImageClick = (user) => {

    if (user.id === loggedInUser.id) {
      navigate(`/user/${user.id}`, { state: { user } });
    } else {
      alert('You cannot view other users\' details.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-xl rounded-xl p-8">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">All Users</h2>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {users.map((user) => (
            <div key={user.id} className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg cursor-pointer" onClick={() => handleImageClick(user)}>
              <img
                src={user.image}
                alt="User Profile"
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-indigo-600"
              />
              <h3 className="text-xl font-semibold text-gray-800">{user.firstName} {user.lastName}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
