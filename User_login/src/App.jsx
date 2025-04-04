import React, { useState } from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import UserProfilePage from './component/UserProfilePage';
import UserDetailPage from './component/UserDetailPage';
import LoginPage from './component/LoginPage';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  return (
    <Routes>
    <Route path="/" element={<LoginPage setUser={setLoggedInUser} />} />
    <Route path="/profile" element={<UserProfilePage loggedInUser={loggedInUser} />} />
    <Route path="/user/:id" element={<UserDetailPage />} />
  </Routes>
  );
}

export default App;


