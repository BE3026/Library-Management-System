import React, { useState } from 'react';
import HomePage from './Homepage';
import './Account.css';
import image from './dp.jpeg';
const UserPage = () => {
    const [homepage,sethomepage]=useState(false);
   if(homepage){
    return <HomePage />;
   }
  return (
    <div>
         <header>
        <nav>
          <ul className="menu">
            <li onClick={()=>sethomepage(true)} >Home</li>
            <li onClick={()=>alert("No items in cart")}>Cart</li>
            <li style={{backgroundColor:'#4caf50',borderRadius:'5px',padding:'3px'}}>User Account</li>
          </ul>
        </nav>
      </header>
    <div className="container1">
      <div className="profile">
        <img
          src={image}
          alt="Default Profile"
          className="profile-image"
        />
        <h2 className="profile-name">Administrator</h2>
        <p className="profile-description">
          I am the administrator of this website , I am enthusiastic in React Js . I have made 3 mini projects with React and thereby widening my knowledge 
          to become an expert in React Js . My hobbies are exploring new things .
        </p>
      </div>
    </div>
    </div>
  );
};

export default UserPage;
