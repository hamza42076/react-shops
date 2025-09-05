import React, { useEffect, useState } from 'react'
import ProductCard from '../components/card';
import Navbar from '../components/Navbar';

const Product = () => {
  const [card , setCard] = useState([]);

  useEffect(()=>{
    const fetchProduct = async ()=>{
      try {
        const Products = await fetch("https://dummyjson.com/products");
        const data = await Products.json();
        setCard(data.products);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProduct();
  },[])

  return (
    <>
      <Navbar/>
       <h1 className='flex justify-center text-4xl mt-4'>Products</h1>
     <div className="flex flex-wrap justify-center md:justify-start gap-6 p-6 bg-gray-800">
     
  {card.map((item) => (
    <div key={item.id} className="flex-1 min-w-[280px] max-w-[350px]">
      <ProductCard product={item} />
    </div>
  ))}
</div>

    </>
  )
}

export default Product
