import React, { useEffect, useState } from 'react';
import axios from 'axios';

function UserPanel() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/products').then(response => {
      setProducts(response.data);
    });
  }, []);

  const addToCart = (product) => {
    axios.post('http://localhost:5000/carts', product).then(() => {
      alert('Added to cart!');
    });
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">User Panel</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button onClick={() => addToCart(product)} className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserPanel;
