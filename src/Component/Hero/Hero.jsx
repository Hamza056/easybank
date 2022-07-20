import React from 'react'
import './Hero.css';
import mockups from '../../images/image-mockups.png';
const Hero = () => {
  return (
  <div className="hero">
    <div className='left-h'>
      <h3>Next generation <br /> digital banking</h3>
      <p>Take your financial life online. Your Easybank account  will be a one-stop-shop 
       for spending, saving,  budgeting, investing, and much more.</p>
       <button className='linear-btn'>Request Invite</button>
    </div>
    <div className="right-h">
     <img src={mockups} alt="" />
    </div>
 </div>
  )
}

export default Hero