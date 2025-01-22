import React from "react";

function ProductList({ products, onAddToCart }) {
  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
          <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;