import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import AscensionMaterialHolder from "../Common/AscensionMaterialHolder";
import { IAscensionData } from "@/interfaces/CharacterInterface";

type Props = {
  ascensionData: IAscensionData[];
};

export default function AscensionMats({ ascensionData }: Props) {
  const itemsMap = ascensionData
    ?.flatMap((ascData) => ascData.costItems)
    ?.reduce((acc, { id, count }) => {
      acc[id] = (acc[id] || 0) + count;
      return acc;
    }, {} as { [id: string]: number });

  const itemsArray = Object.entries(itemsMap);

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function handleExpansion() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="mt-2 bg-slate-800 flex flex-col items-center justify-between p-4 rounded-lg shadow-md mb-2">
      <div className="w-full flex items-center justify-between">
        <p className="font-semibold text-lg">Ascension Materials (from 1-90)</p>
        <div onClick={handleExpansion}>
          <ChevronRightIcon
            className={`w-5 h-5 transform transition ease-in-out duration-300 ${
              isExpanded ? "-rotate-90" : "rotate-0"
            }`}
          />
        </div>
      </div>

      <motion.div
        initial={{
          opacity: 0,
          height: 0,
        }}
        animate={{
          height: isExpanded ? "auto" : 0,
          opacity: isExpanded ? 1 : 0,
        }}
        transition={{ duration: 0.6 }}
        className="w-full md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-2 h-auto"
      >
        {ascensionData ? (
          itemsArray.map(([id, count], index) => {
            if (!id || !count) return null;
            return (
              <div className={`${isExpanded ? "block" : "hidden"}`} key={id}>
                <AscensionMaterialHolder
                  id={id}
                  value={count.toString()}
                  index={index}
                />
              </div>
            );
          })
        ) : (
          <div>Loading Ascension data</div>
        )}
      </motion.div>
    </div>
  );
}
