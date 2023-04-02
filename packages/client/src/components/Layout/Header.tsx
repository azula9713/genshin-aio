import { Bars3Icon } from "@heroicons/react/24/solid";

import DarkModeToggle from "../Custom/DarkModeToggle";
import LogoHolder from "../Common/LogoHolder";

export default function Header() {
  return (
    <div className="h-16 max-h-16 flex items-center justify-between shadow-lg w-full px-4 md:px-12 z-40">
      <div className="h-16 w-12 flex items-center justify-start">
        <LogoHolder />
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
