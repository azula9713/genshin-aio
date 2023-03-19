import OverviewItemHolder from "../Common/OverviewItemHolder";
import weaponTypeParser from "../../functions/WeaponTypeParser";
import { IElementType, IWeaponType } from "../../interfaces/CharacterInterface";
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
};

export default function Overview({
  element,
  weapon,
  affiliation,
  constellation,
  description,
  name,
}: Props) {
  const [chapterIcon, setChapterIcon] = useState<string>("");

  useEffect(() => {
    async function loadImage() {
      const url = await chapterIconFilter(name);
      setChapterIcon(url);
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
            />
          </OverviewItemHolder>
        </div>
        <div className="flex items-center w-full justify-between mt-4">
          <OverviewItemHolder label="Affiliation" value={affiliation}>
            <img
              className="w-6 h-6 mr-2"
              src={weaponIconFilter[weapon]}
              alt={weapon}
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
      <div className="hidden xl:flex mt-2 flex-col items-start justify-center p-4 border-2 border-blue-500">
        <p
          className="w-3/4 leading-5 text-lg italic py-4"
          style={{
            lineHeight: "1rem",
          }}
        >
          "{description}"
        </p>

        <div className="w-full border-yellow-500 border-2 flex items-start justify-evenly">
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
            />
          </OverviewItemHolder>
          <OverviewItemHolder label="Affiliation" value={affiliation}>
            <img
              className="w-10 h-10 mr-2"
              src={weaponIconFilter[weapon]}
              alt={weapon}
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
