'use client'
import { Button, Upload } from 'antd';
import React, { useState, useEffect } from 'react';
import { LoadingOutlined, PlusOutlined } from '@ant-design/icons';
import { data } from '@/data`';
export default function FittingRoom() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [userImage, setUserImage] = useState(null);
  const [responseImage, setResponseImage] = useState(null);
  // Load user image from localStorage
  useEffect(() => {
    console.log("useeffect")
    const storedUserImage = localStorage.getItem('userImage');
    if (storedUserImage) {
      setUserImage(storedUserImage);
    }
  }, []);

  const handleProductSelection = (product) => {
    console.log('Product selected:', product);
    setSelectedProduct(product);
  };

  const handleImageUpload = (event) => {
    console.log("Input event:", event.target.value);  // Log information about the input element
    const uploadedImage = event.target.files[0];
    const reader = new FileReader();
  
    reader.onload = () => {
      // This will be executed when the file is successfully loaded
      console.log("userImage", reader.result);
      alert("Ok");
  
      setUserImage(reader.result);
      localStorage.setItem('userImage', reader.result);
    };
  
    reader.readAsDataURL(uploadedImage);
  };

  const handleVirtualTryOn = async () => {
    // if (!selectedProduct || !userImage) {
    //   console.error('Please select a product and upload your image.');
    //   return;
    // }

    try {
      setResponseImage(userImage);
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
  const uploadButton = (
    <div>
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );
  return (
    <div>
      {/* Display user's image */}
        {userImage && <img src={userImage} alt="Preview" style={{ maxWidth: '400px' }} />}
      {/* Image upload input */}
      <div>
        <h2>Upload your image:</h2>
        <input type="file" accept="image/*" onChange={handleImageUpload} />
      </div>
      
      <div>
      {userImage && <img src={userImage} alt="Preview" style={{ maxWidth: '400px' }} />}
      </div>
      <Button onClick={handleVirtualTryOn}>Try on</Button>
      <div>
        {/* <h2>Select a product:</h2> */}
        {/* Render your product options here and call handleProductSelection when a product is selected */}
        {/* Example: */}
        {/* <button onClick={() => handleProductSelection('product1')}>Product 1</button> */}
        {/* <button onClick={() => handleProductSelection('product2')}>Product 2</button> */}
      </div>

      {responseImage && <img src={responseImage } alt="Preview" style={{ maxWidth: '400px' }} />}
      {
        <div className='flex'>
      {       data?.map((item) => {
          return (
            <div>
              <img src={item.url} alt="Preview" style={{ maxWidth: '400px' }} />
              <Button onClick={() => handleProductSelection(item)}>Try on</Button>
            </div>
          )
        })}
        </div>
     
      }
    </div>
  );
};

