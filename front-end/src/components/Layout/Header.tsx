import Lottie from "react-lottie";

import DarkModeToggle from "../Custom/DarkModeToggle";
import * as genshinLogo from "../../assets/genshin-logo.json";
import { Link } from "react-router-dom";

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
    <Link to="/">
      <div className="h-16 max-h-16 flex items-center justify-between shadow-lg w-full px-4 md:px-12">
        <div className="h-16 w-12 flex items-center justify-start">
          <Lottie options={defaultOptions} height={50} width={50} />
        </div>
        <div className="flex justify-end space-x-3 w-full items-center">
          <div className="hidden">
            <DarkModeToggle />
          </div>
          <div>Menu</div>
        </div>
      </div>
    </Link>
  );
}
