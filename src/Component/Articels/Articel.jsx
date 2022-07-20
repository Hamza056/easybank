import React from 'react'
import './Articel.css';
import currency from '../../images/image-currency.jpg'
import restaurant from '../../images/image-restaurant.jpg'
import plane from '../../images/image-plane.jpg'
import confetti from '../../images/image-confetti.jpg'
const Articel = () => {
  return (
    <div className='Main-A'>
        <h1>Latest Articles</h1>
        <div className="Articel-main">
            <div className="Articel">
            <img src={currency} alt="" />
            <p>By Claire Robinson</p>
            <h3>Receive money in any currency with no fees</h3>
            <p>The world is getting smaller and we’re becoming more mobile. So why should you be 
               forced to only receive money in a single …</p>
            </div>
            <div className="Articel">
            <img src={restaurant} alt="" />
            <p> By Wilson Hutton</p>
            <h3> Treat yourself without worrying about money</h3>
            <p> Our simple budgeting feature allows you to separate out your spending and set 
  realistic limits each month. That means you …</p>
            </div>
            <div className="Articel">
            <img src={plane} alt="" />
            <p>By Wilson Hutton</p>
            <h3> Take your Easybank card wherever you go</h3>
            <p> We want you to enjoy your travels. This is why we don’t charge any fees on purchases 
  while you’re abroad. We’ll even show you …</p>
            </div>
            <div className="Articel">
            <img src={confetti} alt="" />
            <p>By Claire Robinson</p>
            <h3>Our invite-only Beta accounts are now live!</h3>
            <p> After a lot of hard work by the whole team, we’re excited to launch our closed beta. 
  It’s easy to request an invite through the site ...</p>
            </div>
           
        </div>
    </div>
  )
}

export default Articel