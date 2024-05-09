import React from "react";
import "../App.css";
const Body = () => {
  return (
    <main className="mainBody container">
      <div className="texting">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="buttons">
          <button className="first">Shop Now</button>
          <button className="second">Category</button>
        </div>
        <div className="shopping-item">
          <p>you can Buy</p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="Amazon" />
            <img src="/images/flipkart.png" alt="FlipKart" />
          </div>
        </div>
      </div>

      <div className="shoe">
        <img src="/images/shoe_image.png" alt="shoe" />
      </div>
    </main>
  );
};

export default Body;
