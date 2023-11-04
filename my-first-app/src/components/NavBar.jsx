import React from 'react';
import img1 from '../assets/ironhack-logo-xs.png'
import img2 from '../assets/menu-top-xs.png'



function NavBar (){
    return (
    <div className ='navBar'>
      <img src={img1} />
      <img src={img2} />
    </div>
    )
}

export default NavBar;