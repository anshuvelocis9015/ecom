import React, { useState } from 'react';
import axios from 'axios';

function AdminPanel() {
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');

  const addProduct = () => {
    axios.post('http://localhost:5000/products', {
      name: productName,
      price: parseFloat(productPrice)
    }).then(() => {
      alert('Product added successfully!');
      setProductName('');
      setProductPrice('');
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Admin Panel</h1>
      <div className="row">
        <div className="col-md-6">
          <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} className="form-control mb-3" placeholder="Product Name" />
          <input type="number" value={productPrice} onChange={(e) => setProductPrice(e.target.value)} className="form-control mb-3" placeholder="Product Price" />
          <button onClick={addProduct} className="btn btn-primary">Add Product</button>
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;
