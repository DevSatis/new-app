import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerWrapper">
      <div className="footerLine">
        <hr />
      </div>
      <div className="footerContainer">
        <div className="leftSideFooter">
          <span>Powered By CogBooks</span>
        </div>
        <div className="rightSideFooter">
          <span>Copyright</span>
          <span>Help</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
