import React from 'react';
import './SignupCreen.css';

function SignupCreen() {
  const register = e => {
    e.preventDefault();
  };

  const signIn = e => {
    e.preventDefault();
  };

  return (
    <div className='sungupScreen'>
      <form>
        <h1>Sign In</h1>
        <input placeholder='Email' type='email' />
        <input placeholder='Possword' type='password' />
        <button type='subminy' onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className='signupScreen__gray'>New to Netflix? </span>
          <span className='signupScreen__link' onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignupCreen;
