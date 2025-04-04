import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchProductDetail = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching product details:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [id]);

  if (loading) return <p className="text-center text-xl text-gray-600">Loading product details...</p>;

  return (
    <div className="container mx-auto px-6 py-12">
      {product && (
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          {/* Header Section */}
          <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">{product.title}</h1>
          
          <div className="flex flex-col md:flex-row items-center md:items-start">
            {/* Product Image */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg filter drop-shadow-2xl drop-shadow-black hover:drop-shadow-4xl transition-all duration-300 ease-in-out transform hover:-rotate-6"
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 md:pl-6">
              <div className="space-y-4">
                <p className="text-2xl font-semibold text-blue-600">${product.price}</p>
                <p className="text-gray-700">{product.description}</p>

                {/* Key Info Section */}
                <div className="mt-6 space-y-2">
                  <p className="text-lg text-gray-600">Category: <span className="font-medium text-gray-800">{product.category}</span></p>
                  <p className="text-lg text-gray-600">Brand: <span className="font-medium text-gray-800">{product.brand}</span></p>
                  <p className="text-lg text-gray-600">Stock: <span className="font-medium text-gray-800">{product.stock}</span></p>
                  <p className="text-lg text-gray-600">Rating: <span className="font-medium text-yellow-500">{product.rating} / 5</span></p>
                </div>

                {/* Warranty & Shipping */}
                <div className="mt-6 text-gray-600">
                  <p className="text-lg">{product.warrantyInformation}</p>
                  <p className="text-lg mt-2">{product.shippingInformation}</p>
                </div>

                {/* Action Button */}
                <div className="mt-8 flex justify-between items-center">
                  <Link
                    to="/"
                    className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition duration-300"
                  >
                    Back to Products
                  </Link>
                  <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
