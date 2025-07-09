import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useInView } from "react-intersection-observer";

export default function Explore() {
    const [products, setProducts] = useState([]);
      const navigate = useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('https://fashiony-backend.vercel.app/api/product');
           
          
            const allProducts = response.data || [];
            
                
            setProducts(allProducts);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        fetchProducts();
      }, []);

  const handleNavigate = (product) => {
    navigate('/details', { state: { product } });
  };
  return (
     <div className="our_container1">
            <h1>Explore More Products</h1>
            <div className="product_b_con">

                {products.map((product) => {
                  
                    return(
                        
                    <div key={product._id} className="oc2"  onClick={() => handleNavigate(product)}>
                        
                        <img className="bimg" src={product.images?.[0]} alt={product.name} />
                      
                        <h4>{product.name}</h4>
                        <div className="product-details">
                            <span className="price">Rs.{product.regularPrice}</span>
                            <span>{product.rating ||  "  N/A"} <i className="fas fa-star"></i></span>
                        </div>
                    </div>
                    );
                })}

            </div>
        </div>
  )
}
