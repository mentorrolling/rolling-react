import React, { Component } from "react";

import Logo from "../images/logo.png";
import "../css/badge.css";

class Badge extends Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={Logo} alt="logo" />
        </div>
        {/* foto y nombre */}
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="http://1.gravatar.com/avatar/2bd6474c77fd501924adfa0aae631f57"
            alt="Avatar"
          />
          <h1>
            Pablo
            <br />
            Marino{" "}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Frontend Dev</h3>
          <div>@pablomarino8</div>
        </div>
        <div className="Badge__footer">#rollingconf</div>
      </div>
    );
  }
}
export default Badge;
