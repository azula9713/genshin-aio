import OverviewItemHolder from "../../Common/OverviewItemHolder";
import weaponTypeParser from "../../../functions/WeaponTypeParser";
import elementalImageFilter from "../../../static/ElementalImagePicker";
import weaponIconFilter from "../../../static/WeaponIconFilter";
import {
  IElementType,
  IRegion,
  IWeaponType,
} from "../../../interfaces/CharacterInterface";

type Props = {
  name: string;
  chapterIcon: string;
  constellation: string;
  regionIcon: string;
  region: IRegion;
  element: IElementType;
  weapon: IWeaponType;
  affiliation: string;
};

export default function PCOverview({
  name,
  chapterIcon,
  regionIcon,
  constellation,
  region,
  element,
  weapon,
  affiliation,
}: Props) {
  return (
    <div className="hidden xl:flex mt-2 flex-col items-start justify-center p-4">
      <div className="w-full flex flex-col items-start justify-evenly">
        <div className="flex w-full items-center justify-between">
          <OverviewItemHolder label="Element" value={element}>
            <img
              className="w-12 h-12 mr-2"
              src={elementalImageFilter[element]}
              alt={element}
            />
          </OverviewItemHolder>
          <OverviewItemHolder
            label="Weapon Type"
            value={weaponTypeParser(weapon) as string}
          >
            <img
              className="w-12 h-12 mr-2"
              src={weaponIconFilter[weapon]}
              alt={weapon}
              style={{
                filter: "brightness(0) invert(1)",
              }}
            />
          </OverviewItemHolder>
        </div>
        <div className="flex w-full items-center justify-between">
          <OverviewItemHolder label="Affiliation" value={affiliation}>
            <img
              className="w-12 h-12 mr-2"
              src={regionIcon}
              alt={region?.regionName}
            />
          </OverviewItemHolder>
          <OverviewItemHolder label="Constellation" value={constellation}>
            <img
              className="w-12 h-12 mr-2"
              src={chapterIcon as string}
              alt={name}
            />
          </OverviewItemHolder>
        </div>
      </div>
    </div>
  );
}
