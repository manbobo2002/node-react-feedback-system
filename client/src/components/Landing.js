import React from 'react';
import icon from '../assets/email-icon.jpg';

const Landing = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>
        Welcome to the feedback system!
      </h1>
      <a href="/auth/google">
      <img src={icon} alt="icon" className="center"
      height={350}
      width={700}/>
      </a>
      <h2>Collect feedback form your users</h2>
      
    </div>
  );
};

export default Landing;
