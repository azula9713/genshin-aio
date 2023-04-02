import React from "react";
import Lottie from "react-lottie";
import { Link } from "react-router-dom";

import * as genshinLogo from "../../assets/genshin-logo.json";

type Props = {
  height?: number;
  width?: number;
};

export default function LogoHolder({ height = 50, width = 50 }: Props) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: genshinLogo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Link to="/" className="w-full">
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled
        height={height}
        width={width}
      />
    </Link>
  );
}
