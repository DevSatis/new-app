import React from "react";
import "./HelpDesk.css";

const HelpDesk = () => {
  return (
    <div className="helpDeskWrapper">
      <div className="footerLine">
        <hr />
      </div>
      <div className="helpDeskContentWrapper">
        <div className="leftContent">
          <span>CogBooks Instructor Helpdesk</span>
          <span>
            Find answers to common questions about using the instructor tools.
          </span>
        </div>
        <div className="rightContent">
          <span>support@cogbooks.freshdesk.com</span>
          <span>We reply within 24 hours on week days.</span>
        </div>
      </div>
    </div>
  );
};

export default HelpDesk;
