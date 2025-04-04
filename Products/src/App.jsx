import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProductList from './component/ProductList';
import ProductDetail from './component/ProductDetail';

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<ProductList />} /> 
        <Route path="/product/:id" element={<ProductDetail />} /> 
      </Routes>
  );
};

export default App;
