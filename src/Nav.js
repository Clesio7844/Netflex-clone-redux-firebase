import React, { useState, useEffect } from 'react';
import './Nav.css';

function Nav() {
  const [show, handleShow] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true);
    } else {
      handleShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar);
    return () => window.removeEventListener('scroll', transitionNavBar);
  }, []);

  return (
    <div className={`nav ${show && 'nav__black'}`}>
      <div className='nav__contents'>
        <img
          className='nav__logo'
          src='http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
        />
        <img
          className='nav__avatar'
          src='https://p1.hiclipart.com/preview/74/8/847/circle-silhouette-user-logo-user-profile-avatar-head-line-art-oval-png-clipart.jpg'
          alt=''
        />
      </div>
    </div>
  );
}

export default Nav;
