import React from "react";

import Lottie from "react-lottie";
import NotFound404 from "../animation/29894-error-404-page.json";

import "../css/home.css";

export default function NotFound() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: NotFound404,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="Home">
      <Lottie options={defaultOptions} height={600} width={600} />
    </div>
  );
}
