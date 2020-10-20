import React from "react";

import Logo from "../images/logo.png";
import "../css/nabvar.css";

export default function Navbar() {
  return (
    <div className="Navbar ">
      <div className="Navbar__brand ml-3">
        <img className="Navbar__brand-logo" src={Logo} alt="logo de rolling" />
        <span className="font-weight-bolder">Conference</span>
      </div>
    </div>
  );
}
