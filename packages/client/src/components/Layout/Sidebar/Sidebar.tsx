import { useState } from "react";
import { useRecoilState } from "recoil";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/solid";

import { sidebarOpenStateAtom } from "@/atoms/GlobalAtoms";

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useRecoilState(sidebarOpenStateAtom);
  const [isXHovered, setIsXHovered] = useState(false);

  return (
    <motion.div
      className="w-full z-40 right-0 top-0 bottom-0 fixed flex items-start justify-start"
      initial={{ x: "100%" }}
      animate={{ x: sidebarOpen ? "0%" : "100%" }}
      transition={{ duration: 0.2 }}
    >
      {/* Overlay 75% width of screen */}
      <div
        className="w-3/4 h-full bg-black bg-opacity-50"
        onClick={() => setSidebarOpen(false)}
      />

      {/* Sidebar 25% width of screen */}
      <div className="w-1/4 h-full bg-gray-900 text-white overflow-x-hidden min-h-screen flex flex-col items-center justify-start z-40 p-4">
        {/* close icon */}
        {/* Text "close" should display when mouse hovers the x icon */}
        <div
          className="w-full flex items-center justify-end"
          onMouseLeave={() => setIsXHovered(false)}
        >
          <motion.p
            initial={{ opacity: 0, x: 150 }}
            animate={{ opacity: isXHovered ? 1 : 0, x: isXHovered ? 0 : 150 }}
            className="text-bold text-lg mr-2"
          >
            Close
          </motion.p>
          <XMarkIcon
            className="w-6 h-6 cursor-pointer"
            onMouseEnter={() => setIsXHovered(true)}
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      </div>
    </motion.div>
  );
}
