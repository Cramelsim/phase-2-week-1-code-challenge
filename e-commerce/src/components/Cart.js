import React from "react";

function Cart({ cart, onUpdateQuantity, onRemoveFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="cart-item">
              <h4>{item.name}</h4>
              <p>Price: ${item.price}</p>
              <div>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
                <span>Quantity: {item.quantity}</span>
                <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
              <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;