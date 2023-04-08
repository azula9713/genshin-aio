import { useEffect, useState } from "react";
import {
  IElementType,
  IRegion,
  IWeaponType,
} from "@/interfaces/CharacterInterface";
import chapterIconFilter from "@/static/ChapterIconFilter";
import capitalizeFirstLetter from "@/functions/CapitalizeFirstLetter";
import MobileOverview from "./Mobile/MobileOverview";
import PCOverview from "./PC/PCOverview";

type Props = {
  element: IElementType;
  weapon: IWeaponType;
  affiliation: string;
  constellation: string;
  description: string;
  name: string;
  region: IRegion;
};

export default function Overview({
  element,
  weapon,
  affiliation,
  constellation,
  description,
  name,
  region,
}: Props) {
  const [chapterIcon, setChapterIcon] = useState<string>("");
  const [regionIcon, setRegionIcon] = useState<string>("");

  useEffect(() => {
    async function loadImage() {
      const regionUrl = await chapterIconFilter(region?.regionName);

      setRegionIcon(regionUrl);
    }
    loadImage();
  }, [region]);

  useEffect(() => {
    async function loadImage() {
      const chapterUrl = await chapterIconFilter(capitalizeFirstLetter(name));

      setChapterIcon(chapterUrl);
    }
    loadImage();
  }, [name]);

  return (
    <div className="w-full">
      {/* Mobile and Tablet View */}
      <MobileOverview
        affiliation={affiliation}
        chapterIcon={chapterIcon}
        constellation={constellation}
        element={element}
        name={name}
        region={region}
        regionIcon={regionIcon}
        weapon={weapon}
        description={description}
      />
      {/* Mobile and Tablet View Ends*/}

      <PCOverview
        affiliation={affiliation}
        chapterIcon={chapterIcon}
        constellation={constellation}
        element={element}
        name={name}
        region={region}
        regionIcon={regionIcon}
        weapon={weapon}
      />
    </div>
  );
}
