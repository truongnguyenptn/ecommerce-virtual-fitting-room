'use client'
import React, { useState, useEffect } from 'react';

const FittingRoom = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [userImage, setUserImage] = useState(null);

  // Load user image from localStorage
  useEffect(() => {
    const storedUserImage = localStorage.getItem('userImage');
    if (storedUserImage) {
      setUserImage(storedUserImage);
    }
  }, []);

  const handleProductSelection = (product) => {
    setSelectedProduct(product);
  };

  const handleImageUpload = (event) => {
    const uploadedImage = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setUserImage(reader.result);
      localStorage.setItem('userImage', reader.result);
    };

    reader.readAsDataURL(uploadedImage);
  };

  const handleVirtualTryOn = async () => {
    if (!selectedProduct || !userImage) {
      console.error('Please select a product and upload your image.');
      return;
    }

    try {
      // Assuming there is a Virtual Try-On API endpoint
      const response = await fetch('your_virtual_try_on_api_endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers as needed
        },
        body: JSON.stringify({
          product: selectedProduct,
          userImage: userImage,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        // Handle the result, which may include the image of the user wearing the selected product
        console.log('Virtual Try-On result:', result);
      } else {
        console.error('Error calling Virtual Try-On API:', response.statusText);
      }
    } catch (error) {
      console.error('Error calling Virtual Try-On API:', error.message);
    }
  };

  return (
    <div>
      {/* Display user's image */}
      {userImage && <img src={userImage} alt="user" style={{ maxWidth: '100%' }} />}

      {/* Image upload input */}
      <div>
        <h2>Upload your image:</h2>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>

      {/* Product selection */}
      <div>
        <h2>Select a product:</h2>
        {/* Render your product options here and call handleProductSelection when a product is selected */}
        {/* Example: */}
        <button onClick={() => handleProductSelection('product1')}>Product 1</button>
        <button onClick={() => handleProductSelection('product2')}>Product 2</button>
      </div>

      {/* Virtual Try-On button */}
      <button onClick={handleVirtualTryOn}>Virtual Try-On</button>
    </div>
  );
};

export default FittingRoom;
