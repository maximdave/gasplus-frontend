import React from "react";
import "./button-comp.css";
const Button = ({ children, variant = "primary", ...rest }) => {
  return (
    <button {...rest} className={`${variant}-btn`}>
      {children}
    </button>
  );
};

export default Button;
