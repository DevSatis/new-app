import React from 'react'
import "./Header.css";
import LogoImage from "../cbImages/headerImage.png";
import UserIcon from "../cbImages/userIcon.png"


const Header = () => {
  return (
    <div className='headerWrapper'>
    <div className='headerContainer'>
        <div className='leftHeaderItem'>
            <img src={LogoImage} alt="Header logo"  />
        </div>
        <div className='rightHeaderItem'>
            <div className='classCourse'>
                All Your Courses & Classes
            </div>
            <div>
                <img src={UserIcon} alt="Header userIcon" />
            </div>
        </div>  
    </div>
    <div className='hrLine'>
        <hr />
    </div>

    </div>
  )
}

export default Header