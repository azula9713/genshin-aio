import OverviewItemHolder from "../Common/OverviewItemHolder";
import weaponTypeParser from "../../functions/WeaponTypeParser";
import {
  IElementType,
  IRegion,
  IWeaponType,
} from "../../interfaces/CharacterInterface";
import elementalImageFilter from "../../static/ElementalImagePicker";
import weaponIconFilter from "../../static/WeaponIconFilter";
import chapterIconFilter from "../../static/ChapterIconFilter";
import { useEffect, useState } from "react";

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
      const chapterUrl = await chapterIconFilter(name);

      setChapterIcon(chapterUrl);
    }
    loadImage();
  }, [name]);

  return (
    <div className="w-full">
      {/* Mobile and Tablet View */}
      <div className="mt-2 bg-slate-200 dark:bg-slate-600 flex flex-col items-center justify-center p-4 rounded-lg shadow-md xl:hidden">
        <p
          className="text-sm md:text-base lg:text-lg mb-4 italic w-full"
          style={{
            lineHeight: "1rem",
          }}
        >
          "{description}"
        </p>
        <div className="flex items-center w-full justify-between">
          <OverviewItemHolder label="Element" value={element}>
            <img
              className="w-5 h-5 mr-2"
              src={elementalImageFilter[element]}
              alt={elementalImageFilter[element]}
            />
          </OverviewItemHolder>
          <OverviewItemHolder
            label="Weapon Type"
            value={weaponTypeParser(weapon) as string}
          >
            <img
              className="w-6 h-6 mr-2"
              src={weaponIconFilter[weapon]}
              alt={weapon}
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </OverviewItemHolder>
        </div>
        <div className="flex items-center w-full justify-between mt-4">
          <OverviewItemHolder label="Affiliation" value={affiliation}>
            <img
              className="w-6 h-6 mr-2"
              src={regionIcon}
              alt={region?.regionName}
            />
          </OverviewItemHolder>
          <OverviewItemHolder label="Constellation" value={constellation}>
            <img
              className="w-6 h-6 mr-2"
              src={chapterIcon as string}
              alt={name}
            />
          </OverviewItemHolder>
        </div>
      </div>
      {/* Mobile and Tablet View Ends*/}

      {/* PC View */}
      <div className="hidden xl:flex mt-2 flex-col items-start justify-center p-4">
        <p
          className="w-3/4 leading-5 text-lg italic py-4"
          style={{
            lineHeight: "1rem",
          }}
        >
          "{description}"
        </p>

        <div className="w-full flex items-start justify-evenly">
          <OverviewItemHolder label="Element" value={element}>
            <img
              className="w-10 h-10 mr-2"
              src={elementalImageFilter[element]}
              alt={elementalImageFilter[element]}
            />
          </OverviewItemHolder>
          <OverviewItemHolder
            label="Weapon Type"
            value={weaponTypeParser(weapon) as string}
          >
            <img
              className="w-10 h-10 mr-2"
              src={weaponIconFilter[weapon]}
              alt={weapon}
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </OverviewItemHolder>
          <OverviewItemHolder label="Affiliation" value={affiliation}>
            <img
              className="w-10 h-10 mr-2"
              src={regionIcon}
              alt={region?.regionName}
            />
          </OverviewItemHolder>
          <OverviewItemHolder label="Constellation" value={constellation}>
            <img
              className="w-10 h-10 mr-2"
              src={chapterIcon as string}
              alt={name}
            />
          </OverviewItemHolder>
        </div>
      </div>
      {/* PC View Ends*/}
    </div>
  );
}
