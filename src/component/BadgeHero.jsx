//tarea
//crear functional component BadgeHero
//importar estilo
//importar el logo-mac
//crear la estructura del hero
//importar BadgeHero a BadgeNew
import React from "react";
import Logo from "../images/logo-mac.png";
import "../css/badges.css";

export default function BadgeHero() {
  return (
    <div className="Badges__hero">
      <img src={Logo} alt="Imagen de logo rolling" />
    </div>
  );
}
