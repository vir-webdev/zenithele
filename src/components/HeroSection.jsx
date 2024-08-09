import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="largeBox">
            <h1 className="title">WE HAVE</h1>
          </div>
          <div className="combined_boxes">
            <div className="imageBox">
              <img src="ELMEX.jpg" alt="" className="img_bland" />
            </div>
            <div className="textAndLogo">
              <div className="textWithSvg">
                <h1 className="title">EVERYTHING </h1>
                <h1 className="title dishes_title">IN ELECTRICALS</h1>
                <img src="./threelines.svg" alt="threelines" />
              </div>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="LUGS.jpg" alt="hero" className="img_bland" />
          </div>
          <h1 className="title dishes_title">ELECTRICALS</h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
