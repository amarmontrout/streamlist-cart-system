// Home.jsx
import React from "react";
import "../App.css"; // if you need to include global styles

const Home = () => {
  return (
    <div className="home-page" style={{ padding: "2rem", textAlign: "center" }}>
      <h1>Welcome to StreamList</h1>
      <p>
        StreamList is your one-stop platform for discovering, tracking, and managing your favorite streaming content. Whether you're into movies, TV shows, or documentaries, StreamList helps you stay updated and in control of your viewing experience.
      </p>
      <h2>What We Offer</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>✔️ Curated recommendations tailored just for you</li>
        <li>✔️ Seamless integration with popular streaming services</li>
        <li>✔️ Up-to-date release schedules and notifications</li>
        <li>✔️ A user-friendly, intuitive interface</li>
      </ul>
      <p>
        Start exploring our subscription options or dive right into our extensive library. Enjoy a hassle-free streaming experience with StreamList!
      </p>
    </div>
  );
};

export default Home;
