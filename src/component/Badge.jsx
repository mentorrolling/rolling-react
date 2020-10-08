import React, { Component } from "react";

import Logo from "../images/logo.png";

import "../css/badge.css";

class Badge extends Component {
  render() {
    const { firstName, lastName, avatarUrl, jobTitle, twitter } = this.props;
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={Logo} alt="logo" />
        </div>
        {/* foto y nombre */}
        <div className="Badge__section-name">
          <img className="Badge__avatar" src={avatarUrl} alt="Avatar" />
          <h1>
            {firstName}
            <br />
            {lastName}
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>{jobTitle}</h3>
          <div>@{twitter}</div>
        </div>
        <div className="Badge__footer">#rollingconf</div>
      </div>
    );
  }
}
export default Badge;
