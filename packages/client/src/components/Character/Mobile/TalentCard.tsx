import { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { ITalent } from "../../../interfaces/CharacterInterface";
import TextLabel from "../../Common/TextLabel";
import parseText from "../../../functions/ParseEnkaText";

type Props = {
  talent: ITalent;
};

export default function TalentCard({ talent }: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function handleExpansion() {
    setIsExpanded(!isExpanded);
  }

  return (
    <div className="w-full bg-gray-300 dark:bg-slate-700 my-1 p-1 rounded-md">
      <div className="flex items-center justify-between w-full">
        <div className="w-full flex items-center justify-start space-x-3">
          <img src={talent.icon} alt={talent.name} width={60} />
          <TextLabel
            label={talent.name}
            classNames="text-black dark:text-white"
          />
        </div>

        <div
          className="w-1/5 mx-2 flex items-center justify-end"
          onClick={handleExpansion}
        >
          <ChevronRightIcon
            className={`w-5 h-5 transform transition ease-in-out duration-300 ${
              isExpanded ? "-rotate-90" : "rotate-0"
            }`}
          />
        </div>
      </div>

      <motion.div
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          opacity: isExpanded ? 1 : 0,
          height: isExpanded ? "auto" : 0,
        }}
        transition={{ duration: 0.6 }}
        className={`${isExpanded ? "block" : "hidden"}`}
      >
        <div
          className="text-gray-800 dark:text-white px-2"
          dangerouslySetInnerHTML={{
            __html: parseText(talent.description),
          }}
        />
      </motion.div>
    </div>
  );
}
