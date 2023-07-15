import React from "react";

const Footer = ({footerText, quote}) => {
  return (
    <div>
      <h3>{footerText}</h3>
      <footer className="quote">{quote}</footer>
    </div>
  );
};

export default Footer;
