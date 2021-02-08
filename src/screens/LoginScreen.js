import React, { useState } from 'react';
import './LoginScreen.css';
import SignupCreen from './SignupCreen';

function LoginScreen() {
  const [singIn, setSignIn] = useState(false);

  return (
    <div className='loginscreen'>
      <div className='loginScreen__background'>
        <img
          className='loginScreen__logo'
          src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png'
          alt=''
        />
        <button onClick={() => setSignIn(true)} className='loginScreen__button'>
          {' '}
          Sign In
        </button>
        <div className='loginScreen__gradient'></div>
      </div>
      <div className='loginScreen__body'>
        {singIn ? (
          <SignupCreen />
        ) : (
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere. Cancel at any time.</h2>
            <h3>
              Ready ro Watch? Enter your email to create or restart your
              membership
            </h3>
            <div className='loginScreen__input'>
              <form>
                <input type='email' placeholder='email Address' />
                <button
                  onClick={() => setSignIn(true)}
                  className='loginScreen__getStarted'
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
