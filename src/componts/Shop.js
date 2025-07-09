import React, { useState, useEffect } from 'react';


export default function Shop() {
  const [shops, setShops] = useState([]);
  const [selectedShop, setSelectedShop] = useState(null);
  const [error, setError] = useState('');

  // Sample data for exactly four shops
  const sampleShops = [
    {
      id: 1,
      name: 'Fashiony Downtown',
      address: '123 MG Road, Connaught Place, New Delhi, Delhi 110001',
      phone: '+91-9123-456-7890',
      hours: 'Mon-Sat: 10 AM - 8 PM, Sun: 11 AM - 6 PM',
      image: 'https://media.istockphoto.com/id/1023612090/photo/interior-of-clothing-store.jpg?s=612x612&w=0&k=20&c=84NciWwU43Zyzmxph6bCVTG9WRO9rxDGUYtYnUqpTt8='
    },
    {
      id: 2,
      name: 'Fashiony Coastal',
      address: '123 Linking Road, Bandra West, Mumbai, Maharashtra 400050',
      phone: '+91-7890-123-4567',
      hours: 'Mon-Sun: 10 AM - 9 PM',
      image: 'https://thumbs.dreamstime.com/b/view-women-fashion-clothing-store-front-woman-dress-summer-fashion-retail-shop-lady-fashion-shop-interior-155868362.jpg'
    },
    {
      id: 3,
      name: 'Fashiony Uptown',
      address: '123 Park Street, Park Street Area, Kolkata, West Bengal 700016',
      phone: '+91-8765-432-1098',
      hours: 'Mon-Fri: 9 AM - 7 PM, Sat-Sun: 10 AM - 5 PM',
      image: 'https://thumbs.dreamstime.com/b/girl-s-fashion-clothes-shop-21882886.jpg'
    },
    {
      id: 4,
      name: 'Fashiony Westside',
      address: '123 Brigade Road, MG Road Area, Bengaluru, Karnataka 560001',
      phone: '+91-9876-543-2101',
      hours: 'Mon-Sat: 11 AM - 8 PM, Sun: Closed',
      image: 'https://www.firenzemadeintuscany.com/resources/places/Shopping/Luisa%20Via%20Roma/Luisa%20Via%20Roma.jpg?w=1500&h=740&fit=fill&f=center'
    }
  ];

  useEffect(() => {
    // Fetch shops from backend
    const fetchShops = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/shops');
        if (response.ok) {
          const data = await response.json();
          setShops(data.slice(0, 4)); // Limit to 4 shops
        } 
      } catch (err) {
        console.error(err);
        
        setShops(sampleShops); // Fallback to sample data
      }
    };

    fetchShops();
  }, []);

  const handleShopClick = (shop) => {
    setSelectedShop(shop);
  };

  const closeDetails = () => {
    setSelectedShop(null);
  };

  return (
    <div className="shop-page" style={{backgroundColor : '#fff'}}>
      <section className="shop-section">
        <div className="container">
          <h1>Our Stores</h1>
          <p className="intro-text">
            Visit one of our four exclusive Fashiony locations for a premium shopping experience!
          </p>
          {error && <p className="error-message">{error}</p>}
          <div className="shop-grid">
            {shops.map((shop) => (
              <div key={shop.id} className="shop-card" onClick={() => handleShopClick(shop)}>
                <img src={shop.image} alt={shop.name} className="shop-image" />
                <h3>{shop.name}</h3>
                <p className="shop-address">{shop.address}</p>
              </div>
            ))}
          </div>

          {selectedShop && (
            <div className="shop-details">
              <div className="details-content">
                <button className="close-button" onClick={closeDetails}>×</button>
                <img src={selectedShop.image} alt={selectedShop.name} className="details-image" />
                <h2>{selectedShop.name}</h2>
                <p className="details-address">{selectedShop.address}</p>
                <p className="details-phone">{selectedShop.phone}</p>
                <p className="details-hours">{selectedShop.hours}</p>
              </div>
            </div>
          )}
        </div>
      </section>

   
    </div>
  );
}