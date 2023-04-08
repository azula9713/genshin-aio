import { useEffect, useState } from "react";

import Title from "@/components/Common/Typography/Title";
import { IConstellation } from "@/interfaces/CharacterInterface";
import ConstellationIcon from "./ConstellationIcon";
import ConstellationDetails from "./ConstellationDetails";

type Props = {
  consName: string;
  constellations: IConstellation[];
  chapterIcon: string;
};

export default function CharacterConstellationContainer({
  consName,
  constellations,
  chapterIcon,
}: Props) {
  const [selectedConstellation, setSelectedConstellation] =
    useState<IConstellation>(constellations?.[0]);

  useEffect(() => {
    setSelectedConstellation(constellations?.[0]);
  }, [constellations]);

  return (
    <div className="w-full px-7 py-4 overflow-hidden ">
      <div className="w-full flex flex-col items-start justify-center mt-8">
        <Title text={`Constellation - ${consName}`} />
      </div>
      <div className="w-full flex items-start justify-between mt-4">
        <div className="w-full flex flex-col items-center justify-start pb-80">
          <div
            className="mt-60 min-h-max flex items-center justify-center w-full"
            style={{
              //rotate 180deg to make the first constellation at the top
              transform: "rotate(180deg)",
            }}
          >
            {constellations?.map((con, i) => (
              <ConstellationIcon
                key={i}
                index={i}
                constellation={con}
                selectedConstellation={selectedConstellation}
                setSelectedConstellation={setSelectedConstellation}
              />
            ))}
            <img
              src={chapterIcon}
              alt="Chapter Icon"
              className="w-80 h-80"
              style={{
                transform: "rotate(180deg)",
              }}
            />
          </div>
        </div>
        <ConstellationDetails selectedConstellation={selectedConstellation} />
      </div>
    </div>
  );
}
