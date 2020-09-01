import React from "react";
import "./mystyles.css";

function Stylesheets(props) {
  let className = props.primary ? "primary" : "";
  return (
    <div>
      <h1 className={`${className} font-xl`}>Style Sheets</h1>
    </div>
  );
}

export default Stylesheets;
