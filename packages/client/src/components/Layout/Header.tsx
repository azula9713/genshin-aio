import { useSetRecoilState } from "recoil";
import { Bars3Icon } from "@heroicons/react/24/solid";

import DarkModeToggle from "../Custom/DarkModeToggle";
import LogoHolder from "../Common/LogoHolder";
import { sidebarOpenStateAtom } from "@/atoms/GlobalAtoms";

export default function Header() {
  const setSidebarOpen = useSetRecoilState(sidebarOpenStateAtom);

  return (
    <div className="h-16 max-h-16 flex items-center justify-between max-w-[2150px] shadow-lg w-full px-4 md:px-12 fixed top-0 z-30 bg-gray-900">
      <div className="h-16 w-12 flex items-center justify-start">
        <LogoHolder />
      </div>
      <div className="flex justify-end space-x-3 items-center">
        <div className="hidden">
          <DarkModeToggle />
        </div>
        <div>
          <Bars3Icon
            className="h-7 w-7 text-white cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          />
        </div>
      </div>
    </div>
  );
}
