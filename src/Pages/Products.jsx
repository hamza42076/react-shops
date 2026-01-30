import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router'

const Product = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const getProducts = async () => {
    try {
      let res = await axios.get(`https://dummyjson.com/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      console.error(error);
      setTimeout(() => {
        navigate('/product');
      }, 2000);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  if (loading) return <h2 className="text-center mt-6 text-xl">Loading...</h2>;
  if (!product) return <h2 className="text-center mt-6 text-xl">No such product</h2>;

  return (
    
    <div className="flex flex-col items-center m-6 border-2 p-6 rounded-lg shadow-lg max-w-3xl mx-auto bg-white">
      {/* Thumbnail */}
      <img
        className="w-96 h-72 object-cover rounded-lg"
        src={product.thumbnail}
        alt={product.title}
      />

      {/* Details */}
      <div className="flex flex-col items-center mt-6 gap-2 text-center">
        <h2 className="text-3xl font-bold">{product.title}</h2>
        <span className="text-green-500 font-medium">Category: {product.category}</span>
        <span className="text-gray-600">{product.description}</span>
        <span className="text-lg font-semibold">Brand: {product.brand}</span>
        <span className="text-lg">Price: ${product.price}</span>
        <span className="text-blue-500">Rating: ⭐ {product.rating}</span>
        <span className="text-red-500">Discount: {product.discountPercentage}%</span>
        <span className="text-purple-500">In Stock: {product.stock}</span>
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
        {product.images?.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`product-${i}`}
            className="w-40 h-32 object-cover rounded-md border"
          />
        ))}
      </div>
    </div>
  );
};

export default Product;
