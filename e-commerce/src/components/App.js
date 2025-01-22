import React, { useState } from "react";
import ProductList from "./ProductList";
import Cart from "./Cart";
import { products } from "./data/products";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [products,setProducts]=useState([products]);

console.log(products);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);
      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...currentCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(id);
      return;
    }
    setCart((currentCart) =>
      currentCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  return (
    <div className="App">
      <header>
        <h1>Simple E-Commerce Cart</h1>
      </header>
      <main>
        <section className="products-section">
          <h2>Products</h2>
          <ProductList products={products} onAddToCart={addToCart} />
        </section>
        <section className="cart-section">
          <Cart
            cart={cart}
            onUpdateQuantity={updateQuantity}
            onRemoveFromCart={removeFromCart}
          />
        </section>
      </main>
    </div>
  );
}

export default App;