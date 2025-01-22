import React from 'react';

function Cart({ cart, onUpdateQuantity, onRemoveFromCart }) {
  // Calculate the total price
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            <h3>{item.name}</h3>
            <p>Price: Ksh. {item.price}</p>
            <div>
              <button onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}>-</button>
              <span>Quantity: {item.quantity}</span>
              <button onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}>+</button>
              </div>
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button> {/* Correct usage */}
          </li>
        ))}
      </ul>
      <h3>Total: Ksh. {total}</h3>
    </div>
  );
}

export default Cart;
