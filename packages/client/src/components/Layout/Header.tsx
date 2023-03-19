import Lottie from "react-lottie";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

import DarkModeToggle from "../Custom/DarkModeToggle";
import * as genshinLogo from "../../assets/genshin-logo.json";

export default function Header() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: genshinLogo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="h-16 max-h-16 flex items-center justify-between shadow-lg w-full px-4 md:px-12">
      <div className="h-16 w-12 flex items-center justify-start">
        <Link to="/" className="w-full">
          <Lottie
            options={defaultOptions}
            isClickToPauseDisabled
            height={50}
            width={50}
          />
        </Link>
      </div>
      <div className="flex justify-end space-x-3 w-full items-center">
        <div className="hidden">
          <DarkModeToggle />
        </div>
        <div>
          <Bars3Icon className="h-7 w-7" />
        </div>
      </div>
    </div>
  );
}
