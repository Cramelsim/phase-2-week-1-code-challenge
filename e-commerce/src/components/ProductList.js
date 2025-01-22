import React from 'react';

function ProductList({ products, addToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <img 
            src={product.image} 
            alt={product.name} 
            style={{ width: '200px', height: 'auto' }} // You can adjust the size here
          />
          <p>Price: Ksh. {product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
