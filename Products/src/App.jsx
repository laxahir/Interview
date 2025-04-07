import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';
import LoginPage from './component/LoginPage';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<LoginPage />} /> 
        <Route path="/products" element={<ProductList />} /> 
        <Route path="/product/:id" element={<ProductDetail />} /> 
      </Routes>
  );
};

export default App;
