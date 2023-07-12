import React from "react";

import "./Laurels.css";
import { SubHeading, Award } from "../../components";
import { images, data } from "../../constants";
const Laurels = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recognition" />
      <h1 className="headtext__cormorant">Our Laurels</h1>
      <div className="app__laurels_awards">
        {data.awards.map((award, index) => (
          <Award
            key={award.title + index}
            award={award}
          />
        ))}
        
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="" />
    </div>
  </div>
);

export default Laurels;
