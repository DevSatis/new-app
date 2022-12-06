import React from 'react'
import "./Header.css";
import LogoImage from "../cbImages/headerImage.png";
import UserIcon from "../cbImages/userIcon.png"


const Header = () => {
  return (
    <div className='headerContainer'>
        <div className='leftHeaderItem'>
            <img src={LogoImage} alt="Header Image" />
        </div>
        <div className='rightHeaderItem'>
            <div>
                All Your Courses & Classes
            </div>
            <div>
                <img src={UserIcon} alt="Header Image" />
            </div>
        </div>
        
    </div>
  )
}

export default Header