import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalProducts, setTotalProducts] = useState(0);
  const productsPerPage = 10;

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://dummyjson.com/products?limit=${productsPerPage}&skip=${(page - 1) * productsPerPage}`
      );
      setProducts(response.data.products);
      setTotalProducts(response.data.total);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching products", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [page]);

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  const totalPages = Math.ceil(totalProducts / productsPerPage);

  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Products</h1>

      {loading ? (
        <div className="flex justify-center items-center space-x-4">
          <div className="animate-spin rounded-full border-t-4 border-blue-500 h-16 w-16"></div>
          <span className="text-xl text-gray-600">Loading...</span>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-4 shadow-lg transform hover:scale-105 transition duration-300 ease-in-out bg-white"
              >
                {/* Make the image clickable */}
                <Link to={`/product/${product.id}`}>
                  <img
                    src={product.images[0]}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-md mb-4 hover:opacity-75 transition"
                  />
                </Link>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                <p className="text-gray-600 text-sm">{product.category}</p>
                <p className="text-lg font-semibold text-blue-500 mt-2">${product.price}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8 items-center space-x-4">
            <button
              onClick={handlePrevPage}
              disabled={page === 1}
              className="px-6 py-3 bg-blue-600 text-white rounded-md disabled:bg-gray-300 transition-all duration-300 hover:bg-blue-700"
            >
              Prev
            </button>
            <span className="text-lg font-medium">{page} of {totalPages}</span>
            <button
              onClick={handleNextPage}
              disabled={page === totalPages}
              className="px-6 py-3 bg-blue-600 text-white rounded-md disabled:bg-gray-300 transition-all duration-300 hover:bg-blue-700"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
