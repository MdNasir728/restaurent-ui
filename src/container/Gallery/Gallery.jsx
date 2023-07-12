import React from 'react';
import { SubHeading } from "../../components";
import './Gallery.css';
import { images } from "../../constants";
const Gallery = () => (
  <div className='app__gallery flex__center'>
    <div className="app__gallery-content">
      <SubHeading title='Instagram'/>
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className="p__opensans" style={{color: 'rgb(170, 170, 170)', marginTop: '2rem'} }>
      Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Volutpat Mattis Ipsum Turpis Elit Elit Scelerisque Egestas Mu
      </p>
      <button className="custom__button" style={{marginTop: '1rem'}}>View More</button>
    </div>
    <div className="app__gallery-img">
      <img src={images.gallery01} alt="" />
      <img src={images.gallery02} alt="" />
      <img src={images.gallery03} alt="" />
      <img src={images.gallery04} alt="" />
    </div>
  </div>
);

export default Gallery;
