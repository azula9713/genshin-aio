// import { ChevronRightIcon } from "@heroicons/react/24/solid";
// import { useEffect, useState } from "react";
// import sanitizeHTML, {
//   cleanAttackData,
// } from "../../functions/SanitizeHTMLStrings";

import { ITalent } from "../../interfaces/CharacterInterface";
import TextLabel from "../Common/TextLabel";

type Props = {
  talent: ITalent;
  isAtk?: boolean;
};

// interface IAtkType {
//   atkType: string;
//   desc: string;
// }

export default function TalentCard({ talent, isAtk = false }: Props) {
  // const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // const [sanitizedDesc, setSanitizedDesc] = useState<string[]>([]);
  // const [atkObject, setAtkObject] = useState<any>([]);

  // function handleExpansion() {
  //   setIsExpanded(!isExpanded);
  // }

  // useEffect(() => {
  //   setSanitizedDesc(sanitizeHTML(talent.description));
  // }, [talent]);

  // useEffect(() => {
  //   if (isAtk) {
  //     setAtkObject(cleanAttackData(sanitizedDesc));
  //   }
  // }, [sanitizedDesc, isAtk]);

  return (
    <div className="w-full bg-gray-800 my-1 p-1 rounded-md">
      <div className="flex items-center justify-between w-full">
        <div className="w-full flex items-center justify-start space-x-3">
          <img src={talent.icon} alt={talent.name} width={60} />
          <TextLabel label={talent.name} classNames="text-white" />
        </div>

        {/* <div
          className="w-1/5 mx-2 flex items-center justify-end cursor-pointer"
          onClick={handleExpansion}
        >
          <ChevronRightIcon
            className={`w-5 h-5 transform transition ease-in-out duration-300 ${
              isExpanded ? "-rotate-90" : "rotate-0"
            }`}
          />
        </div> */}
      </div>

      {/* <div className={`${isExpanded ? "block" : "hidden"}`}>
        <p>Coming Soon!!!</p>
        {!isAtk ? (
          <p className="text-left px-2">{sanitizedDesc}</p>
        ) : (
          atkObject.map((atk: IAtkType, i: number) => (
            <div key={i} className="p-1">
              <h5 className="font-bold">{atk.atkType}:</h5>
              <p className="text-sm pl-2">{atk.desc}</p>
            </div>
          ))
        )}
      </div> */}
    </div>
  );
}
