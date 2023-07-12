import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
const FindUs = () => (
  <div className="app__wrapper app__bg section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant">Find Us</h1>
      <div className="app__wrapper-content" style={{ marginTop: "3rem" }}>
        <p className="p__opensans">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 75G
        </p>
        <p
          className="p__cormorant"
          style={{ color: "rgb(220, 202, 135)", marginTop: "2rem" }}
        >
          Opening Hours
        </p>
        <p className="p__opensans" style={{ marginTop: "2rem" }}>
          Mon - Fri: 10:00 Am - 02:00 Am
        </p>
        <p className="p__opensans">Sat - Sun: 10:00 Am - 03:00 Am</p>
      </div>
      <button className="custom__button" style={{ marginTop: '2rem'  }}>Visit Us</button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="" />
    </div>
  </div>
);

export default FindUs;
