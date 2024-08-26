import React, { useEffect, useRef } from "react";
import { MdOutlineReply } from "react-icons/md";

import "./Home.css";

const EmailItemDetails = (props) => {
  const { isInboxArray } = props;
  const data = isInboxArray[0];
 
  const { fromEmail, toEmail } = data;
  const buttonRef = useRef(null);

  const handleKeyDown = (event) => {
    if (event.key === "R" || event.key === "r") {
      
      if (buttonRef.current) {
        buttonRef.current.click();
      }
    }
  };

  useEffect(() => {
    
    window.addEventListener("keydown", handleKeyDown);

    
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleButtonClick = () => {
    alert("Button clicked!");
  };

  return (
    <div>
      <div className="card">
        <h1>New Product Launch</h1>
        <p>{fromEmail}</p>
        <p>{toEmail}</p>
      </div>
      <button ref={buttonRef} onClick={handleButtonClick} className="reply-btn">
        <MdOutlineReply />
        Reply
      </button>
    </div>
  );
};

export default EmailItemDetails;