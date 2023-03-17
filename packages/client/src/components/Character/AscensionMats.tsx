import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { IAscensionData } from "../../interfaces/CharacterInterface";
import AscensionMaterialHolder from "../Common/AscensionMaterialHolder";

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

  const [animatedItems, setAnimatedItems] = useState(
    new Array(itemsArray.length).fill(false)
  );

  function handleExpansion() {
    setIsExpanded(!isExpanded);

    // Start the animation after a short delay
    setTimeout(() => {
      setAnimatedItems(new Array(itemsArray.length).fill(true));
    }, 50);
  }

  return (
    <div className="mt-2 bg-slate-600 flex flex-col items-center justify-between p-4 rounded-lg shadow-md mb-2">
      <div className="w-full flex items-center justify-between">
        <p>Ascension Mats</p>

        {isExpanded ? (
          <ChevronUpIcon
            onClick={handleExpansion}
            className="h-4 w-4 font-bold"
          />
        ) : (
          <ChevronDownIcon
            onClick={handleExpansion}
            className="w-4 h-4 font-bold"
          />
        )}
      </div>
      {isExpanded && (
        <div className="w-full transition-all duration-300 ease-in-out">
          {ascensionData ? (
            itemsArray.map(([id, count], index) => {
              if (!id || !count) return null;
              return (
                <div
                  key={id}
                  className={`${
                    animatedItems[index] ? "translate-x-0" : "translate-x-full"
                  } transition-transform duration-500 ease-in-out delay-${
                    100 * index
                  }`}
                >
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
        </div>
      )}
    </div>
  );
}
