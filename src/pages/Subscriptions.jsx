import React from "react";
import list from "../assets/data";
import "../styles/Subscriptions.css"

const Subscriptions = () => {
  return (
    <div className="subscriptions-page">
      <h1>Subscriptions</h1>
      <div className="subscription-items">
        {list.map((item) => {
          return (
            <div key={item.id} className="subscription-card">
              <div className="subscription-img">
                <img src={item.img} />
              </div>
              <p className="subscription-amount">Items left: {item.amount}</p>
              <div className="subscription-details">
                <h2>{item.service}</h2>
                <p>{item.serviceInfo}</p>
                <p>${item.price}</p>
              </div>
              <button className="subscription-btn">Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Subscriptions;
