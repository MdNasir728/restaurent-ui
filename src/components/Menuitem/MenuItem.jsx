import React from 'react';

import './MenuItem.css';

const MenuItem = ({title, tag, price}) => (
  <div className='app__menuitem'>
    <div className="app__menuitem-head">
      <div className='app__menuitem-name'>
        <p className="p__cormorant" style={{color: 'rgb(220, 202,135)'}} >{title}</p>
      </div>
      <div className='app__menuitem-dash'/>
      <div className="app__menuitem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    <div className="app__manuitem-sub" >
      <p className="p__opensans" style={{color: 'rgb(170, 170,170)'}}>{tag}</p>
    </div>
  </div>
);

export default MenuItem;
