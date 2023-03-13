import OverviewItemHolder from "../../components/Common/OverviewItemHolder";
import weaponTypeParser from "../../functions/WeaponTypeParser";

import {
  IElementType,
  IWeaponByCharacter,
} from "../../interfaces/CharacterInterface";
import elementalImageFilter from "../../static/ElementalImagePicker";
import weaponIconFilter from "../../static/WeaponIconFilter";

type Props = {
  element: IElementType;
  weapon: IWeaponByCharacter;
  affiliation: string;
  constellation: string;
};

export default function Overview({
  element,
  weapon,
  affiliation,
  constellation,
}: Props) {
  return (
    <div className="mt-2 bg-slate-600 flex flex-col items-center justify-center p-4 rounded-lg shadow-md">
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
          value={weaponTypeParser(weapon?.weaponType) as string}
        >
          <img
            className="w-6 h-6 mr-2"
            src={weaponIconFilter[weapon?.weaponType]}
            alt="polearm"
          />
        </OverviewItemHolder>
      </div>
      <div className="flex items-center w-full justify-between">
        <OverviewItemHolder label="Affiliation" value={affiliation} />
        <OverviewItemHolder label="Constellation" value={constellation} />
      </div>
    </div>
  );
}
