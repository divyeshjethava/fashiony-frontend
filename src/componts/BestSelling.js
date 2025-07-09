import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function BestSelling() {
    const [products, setProducts] = useState([]);
      const navigates = useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await axios.get('https://fashiony-backend.vercel.app/api/product');
           
          
            const allProducts = response.data || [];
            const bestSellingProducts = allProducts.filter(product => product.status === 'bs');
                
            setProducts(bestSellingProducts);
          } catch (error) {
            console.error('Error fetching products:', error);
          }
        };
        fetchProducts();
      }, []);
   const handleNavigate = (product) => {
    navigates('/details', { state: { product } });
  };

    return (
        <div className="our_container1">
            <h1>Best Selling Products</h1>
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
    );
}
