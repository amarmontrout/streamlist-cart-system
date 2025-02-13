// Cart.jsx
import React from "react";

const Cart = ({ cart, setCart }) => {
  // Function to handle deletion of an item
  const deleteItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
  };

  // Function to handle quantity change
  const changeQuantity = (index, newQuantity) => {
    const updatedCart = [...cart];
    if (newQuantity > 0) {
      updatedCart[index].quantity = newQuantity;
    } else {
      updatedCart.splice(index, 1);
    }
    setCart(updatedCart);
  };

  // Calculate the total price
  const total = cart
    .reduce((acc, item) => acc + Number(item.price) * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <div>
          <form>
            {cart.map((item, index) => (
              <div key={index} className="cart-item">
                <h3>{item.service}</h3>
                <p>Price: ${item.price}</p>
                <label>Quantity:</label>
                <input
                  type="number"
                  value={item.quantity || 1}
                  min="1"
                  onChange={(e) =>
                    changeQuantity(index, parseInt(e.target.value))
                  }
                />
                <button type="button" onClick={() => deleteItem(index)}>
                  Delete
                </button>
              </div>
            ))}
          </form>
          <div className="cart-total">
            <h2>Total: ${total}</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
