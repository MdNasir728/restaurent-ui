import React from 'react'
import './award.css'
const Award = ({award: {title, subtitle, imgUrl}}) => {
  return (
    <div className='app__laurels_award-card'>
      <img src={imgUrl} alt="" />
      <div className="app__laurels_award-card_content">
        <p className="p__cormorant" style={{color: 'rgb(220, 202, 135)'}}>{title}</p>
        <p className="p__opensans">{subtitle}</p>
      </div>
    </div>
  )
}

export default Award
