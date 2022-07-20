import React from 'react'
import './Testimonial.css';
import online from '../../images/icon-online.svg';
import budgeting from '../../images/icon-budgeting.svg';
import onboarding from '../../images/icon-onboarding.svg';
import api from '../../images/icon-api.svg'
const Testimonial = () => {
  return (
    <div className='main-t'>
        <div className="Easybook-t">
            <h1>Why choose Easybank?</h1>
            <p>We leverage Open Banking to turn your bank account into your financial hub. Control 
              your finances like never before.</p>
        </div>
        <div className="Testimonial-t">
            <div className="testimonial">
                <img src={online} alt="" />
                <h2>
                Online Banking
                </h2>
                <p>Our modern web and mobile applications allow you to keep track of your finances 
  wherever you are in the world.</p>
            </div>
            <div className="testimonial">
                <img src={budgeting} alt="" />
                <h2>
                Simple Budgeting
                </h2>
                <p> See exactly where your money goes each month. Receive notifications when you’re 
  close to hitting your limits.</p>
            </div>
            <div className="testimonial">
                <img src={onboarding} alt="" />
                <h2>
                Fast Onboarding
                </h2>
                <p> We don’t do branches. Open your account in minutes online and start taking control 
  of your finances right away.</p>
            </div>
            <div className="testimonial">
                <img src={api} alt="" />
                <h2>
                Open API
                </h2>
                <p> Manage your savings, investments, pension, and much more from one account. Tracking 
  your money has never been easier.</p>
            </div>
        </div>
    </div>
  )
}

export default Testimonial