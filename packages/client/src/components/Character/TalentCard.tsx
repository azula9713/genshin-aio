import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

import { ITalent } from "../../interfaces/CharacterInterface";
import TextLabel from "../Common/TextLabel";

type Props = {
  talent: ITalent;
};

export default function TalentCard({ talent }: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  function handleExpansion() {
    setIsExpanded(!isExpanded);
  }

  function parseText(inputText: string) {
    // Replace color codes with HTML style tags
    let modifiedText = inputText.replace(
      /<color=([^>]+)>/g,
      '<b style="color:$1">'
    );
    modifiedText = modifiedText.replace(/<\/color>/g, "</b>");

    modifiedText = modifiedText.replace(
      /\{LAYOUT_MOBILE#Tap\}\{LAYOUT_PC#Press\}\{LAYOUT_PS#Press\}/g,
      "Mobile:Tap, PS/PC: Press"
    );

    modifiedText = modifiedText.replace(/(\r\n|\n|\\n|\r)/gm, "<br/>");

    //Removes unnecessary # symbols from the modified text
    const regex = /#(?!([0-9A-Fa-f]{6}|[0-9A-Fa-f]{3}))/g;

    modifiedText = modifiedText.replace(regex, "");

    return modifiedText;
  }

  return (
    <div className="w-full bg-gray-800 my-1 p-1 rounded-md">
      <div className="flex items-center justify-between w-full">
        <div className="w-full flex items-center justify-start space-x-3">
          <img src={talent.icon} alt={talent.name} width={60} />
          <TextLabel label={talent.name} classNames="text-white" />
        </div>

        <div
          className="w-1/5 mx-2 flex items-center justify-end cursor-pointer"
          onClick={handleExpansion}
        >
          <ChevronRightIcon
            className={`w-5 h-5 transform transition ease-in-out duration-300 ${
              isExpanded ? "-rotate-90" : "rotate-0"
            }`}
          />
        </div>
      </div>

      <div className={`${isExpanded ? "block" : "hidden"}`}>
        <div
          className="text-white px-2"
          dangerouslySetInnerHTML={{
            __html: parseText(talent.description),
          }}
        />
      </div>
    </div>
  );
}
