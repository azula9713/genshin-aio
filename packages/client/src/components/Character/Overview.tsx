import OverviewItemHolder from "../Common/OverviewItemHolder";
import weaponTypeParser from "../../functions/WeaponTypeParser";
import { IElementType, IWeaponType } from "../../interfaces/CharacterInterface";
import elementalImageFilter from "../../static/ElementalImagePicker";
import weaponIconFilter from "../../static/WeaponIconFilter";

type Props = {
  element: IElementType;
  weapon: IWeaponType;
  affiliation: string;
  constellation: string;
  description: string;
};

export default function Overview({
  element,
  weapon,
  affiliation,
  constellation,
  description,
}: Props) {
  return (
    <div className="mt-2 bg-slate-200 dark:bg-slate-600 flex flex-col items-center justify-center p-4 rounded-lg shadow-md">
      <p
        className="text-sm md:text-base lg:text-lg mb-4 italic"
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
            alt="polearm"
          />
        </OverviewItemHolder>
      </div>
      <div className="flex items-center w-full justify-between mt-4">
        <OverviewItemHolder label="Affiliation" value={affiliation} />
        <OverviewItemHolder label="Constellation" value={constellation} />
      </div>
    </div>
  );
}
