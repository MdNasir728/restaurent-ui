import React from "react";
import { SubHeading } from "../../components";
import "./Footer.css";
import { images } from "../../constants";


const Footer = () => (
  <div className="app__footer section__padding">
    <div className="app__footerOverlay">
      <div className="app__footerOverlay_black" />
      <div className="app__footerOverlay_img app__bg" />
    </div>
    <div className="app__footer-newsletter">
      <div className="app__footer-newsletter_heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And Never Miss Latest Updates!</p>
      </div>
      <div className="app__footer-newsletter-input">
        <input type="email" placeholder="Enter your email address" />
        <button className="custom__button" style={{ marginLeft: "1rem" }}>
          Subscribe
        </button>
      </div>
    </div>
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="footer__links-headtext">Contact Us</h1>
        <p className="p__opensans">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="p__opensans">+1 212-344-1230</p>
        <p className="p__opensans">+1 212-555-1230</p>
      </div>
      <div className="app__footer-links_logo">
        <img src={images.gericht} alt="" />
        <p className="p__opensans">
          "The Best Way To Find Yourself Is To Lose Yourself In The Service Of
          Others."
        </p>
        <img src={images.spoon} alt="" className="spoon__img" />
      </div>
      <div className="app__footer-links_work">
        <h1 className="footer__links-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:<br /> 08:00 Am - 12:00 Am</p>
        <p className="p__opensans">Saturday-Sunday:<br/> 07:00 Am - 11:00 Pm</p>
      </div>
    </div>
    <hr />
    <div className="app__footer-copyright">
      <p className="p__opensans">2021 Gericht. All Rights Reserved</p>
    </div>
  </div>
);

export default Footer;
