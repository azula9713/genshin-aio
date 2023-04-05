import weaponTypeParser from "../../../functions/WeaponTypeParser";
import {
  IElementType,
  IRegion,
  IWeaponType,
} from "../../../interfaces/CharacterInterface";
import elementalImageFilter from "../../../static/ElementalImagePicker";
import weaponIconFilter from "../../../static/WeaponIconFilter";
import OverviewItemHolder from "../../Common/OverviewItemHolder";

type Props = {
  name: string;
  chapterIcon: string;
  constellation: string;
  regionIcon: string;
  region: IRegion;
  element: IElementType;
  weapon: IWeaponType;
  affiliation: string;
  description: string;
};

export default function MobileOverview({
  name,
  chapterIcon,
  regionIcon,
  constellation,
  region,
  element,
  weapon,
  affiliation,
  description,
}: Props) {
  return (
    <div className="mt-2 bg-slate-200 dark:bg-slate-800 bg-opacity-50 flex flex-col items-center justify-center p-4 rounded-lg shadow-md xl:hidden">
      <p
        className="text-sm md:text-base lg:text-lg mb-4 italic w-full text-slate-400"
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
            alt={element}
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
          <img className="w-6 h-6 mr-2" src={chapterIcon} alt={name} />
        </OverviewItemHolder>
      </div>
    </div>
  );
}
