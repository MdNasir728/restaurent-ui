import React from "react";

import "./SpecialMenu.css";
import { SubHeading, MenuItem } from "../../components";
import { images, data } from "../../constants";
const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits Your Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine ">
        <p className="app__specialMenu-menu_heading">Wine & Beer</p>
        <div className="app__specialMenu-menu_item">
          {data.wines.map((item, index) => 
            <MenuItem
              key={item.title + index}
              title={item.title}
              tag={item.tags}
              price={item.price}
            />
          )}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="" />
      </div>
      <div className="app__specialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading">Cocktails</p>
        <div className="app__specialMenu-menu_item">
          {data.cocktails.map((item, index) => 
            <MenuItem
              key={item.title + index}
              title={item.title}
              tag={item.tags}
              price={item.price}
            />
          )}
        </div>
      </div>
    </div>
    <div className="app__specialMenu-button">
      <button className="custom__button"> View More</button>
    </div>
  </div>
);

export default SpecialMenu;
