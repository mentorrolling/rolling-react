import React from "react";
import Navbar from "../component/Navbar";
import Badge from "../component/Badge";

import Logo from "../images/logo-mac.png";
import "../css/badges.css";

export default function BadgeNew() {
  return (
    <div>
      <Navbar />
      <div className="Badges__hero">
        <img src={Logo} alt="Imagen de logo rolling" />
      </div>

      <div className="container">
        <div className="row mb-3">
          <div className="col-6">
            <Badge
              firstName="Daniel"
              lastName="Gonzalez"
              jobTitle="Hacker de la red"
              twitter="hackermarino"
              avatarUrl="http://1.gravatar.com/avatar/2bd6474c77fd501924adfa0aae631f57"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
