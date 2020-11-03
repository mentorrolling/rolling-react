import React from "react";
import BadgeHero from "./BadgeHero";
import Navbar from "./Navbar";

export default function Layout(props) {
  return (
    <>
      <Navbar />

      {props.children}
    </>
  );
}
