import { Bars3Icon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";

import DarkModeToggle from "../Custom/DarkModeToggle";
import LogoHolder from "../Common/LogoHolder";

export default function Header() {
  const navigate = useNavigate();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <div className="h-16 max-h-16 flex items-center justify-between shadow-lg w-full px-4 md:px-12 fixed top-0 z-30 bg-gray-900">
      <div
        className="h-16 w-12 flex items-center justify-start"
        onClick={() => {
          if (window.location.pathname === "/") {
            scrollToTop();
          } else {
            navigate("/");
          }
        }}
      >
        <LogoHolder />
      </div>
      <div className="flex justify-end space-x-3 w-full items-center">
        <div className="hidden">
          <DarkModeToggle />
        </div>
        <div>
          <Bars3Icon className="h-7 w-7 text-white" />
        </div>
      </div>
    </div>
  );
}
