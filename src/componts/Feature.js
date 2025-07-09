import React, { useState } from 'react';

export default function Feature() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const features = [
    {
      id: 1,
      title: 'Nationwide Free Shipping & Easy Returns',
      description: 'Shop worry-free with free shipping across India and hassle-free returns within 30 days.',
      details: 'Enjoy free shipping on all orders, no minimum spend required! Return or exchange items within 30 days if they don’t fit perfectly. Our seamless process ensures you shop with confidence.',
      image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Personalized Fashion Recommendations',
      description: 'Discover styles curated just for you with our smart fashion recommendations.',
      details: 'Our AI-powered system analyzes your browsing and purchase history to suggest outfits tailored to your taste, from trendy kurtas to chic western wear.',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Multiple Payment Options Including COD',
      description: 'Pay your way with UPI, cards, net banking, or Cash on Delivery for ultimate convenience.',
      details: 'Choose from UPI, Paytm, credit/debit cards, net banking, or COD. Secure transactions with trusted gateways ensure your peace of mind.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Exclusive In-Store & Online Offers',
      description: 'Unlock exclusive deals online and at our stores in New Delhi, Bengaluru, Mumbai, and Chennai.',
      details: 'Get special discounts, seasonal offers, and loyalty rewards when you shop online or visit our flagship stores across India.',
      image: 'https://images.pexels.com/photos/135620/pexels-photo-135620.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const closeDetails = () => {
    setSelectedFeature(null);
  };
  return (
    <div className="feature-page" style={{backgroundColor : '#fff'}}>
      <section className="feature-section">
        <div className="container">
          <h1>Why Shop with Fashiony?</h1>
          <p className="intro-text">
            Explore the exclusive features that make Fashiony your go-to destination for fashion in India!
          </p>
          <div className="feature-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card" onClick={() => handleFeatureClick(feature)}>
                <img src={feature.image} alt={feature.title} className="feature-image" />
                <h3>{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>

          {selectedFeature && (
            <div className="feature-details">
              <div className="details-content">
                <button className="close-button" onClick={closeDetails}>×</button>
                <img src={selectedFeature.image} alt={selectedFeature.title} className="details-image" />
                <h2>{selectedFeature.title}</h2>
                <p className="details-description">{selectedFeature.details}</p>
              </div>
            </div>
          )}
        </div>
      </section>


    </div>
  )
}
