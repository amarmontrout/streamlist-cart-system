import React from "react";
import list from "../assets/data";
import "../styles/Subscriptions.css";

const Subscriptions = ({ cart, setCart }) => {
  const addToCart = (item) => {
    // Check if the item already exists in the cart
    const existingItemIndex = cart.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex !== -1) {
      // If the item exists, update the quantity
      const updatedCart = cart.map((cartItem, index) => {
        if (index === existingItemIndex) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });
      setCart(updatedCart);
      console.log("Updated Cart:", updatedCart);
    } else {
      // If the item doesn't exist, add it with quantity 1
      const newItem = { ...item, quantity: 1 };
      setCart([...cart, newItem]);
      console.log("Updated Cart:", [...cart, newItem]);
    }
  };

  return (
    <div className="subscriptions-page">
      <h1>Subscriptions</h1>
      <div className="subscription-items">
        {list.map((item) => (
          <div key={item.id} className="subscription-card">
            <div className="subscription-img">
              <img src={item.img} alt={item.service} />
            </div>
            <p className="subscription-amount">Items left: {item.amount}</p>
            <div className="subscription-details">
              <h2>{item.service}</h2>
              <p>{item.serviceInfo}</p>
              <p>${item.price}</p>
            </div>
            <button className="subscription-btn" onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;
