import { ICharacter } from "../../interfaces/CharacterInterface";
import colorFilter, { bgColorFilter } from "../../static/ThumbnailColourFilter";
import elementalImageFilter from "../../static/ElementalImagePicker";
import { Link } from "react-router-dom";

type Props = {
  character: ICharacter;
};

export default function CharacterThumbnail({ character }: Props) {
  const { fromColor: bgFrom } = colorFilter[character.rarity];
  const { viaColor: bgVia } = colorFilter[character.rarity];
  const { toColor: bgTo } = colorFilter[character.rarity];

  return (
    <Link to={`/character/${character.id}`}>
      <div
        style={{ backgroundColor: bgColorFilter[character.rarity] }}
        className="mx-3 w-[95px] relative lg:w-[120px] rounded-xl shadow-lg drop-shadow-md shadow-[#323333] overflow-hidden mb-5 cursor-pointer "
      >
        <div className="w-full flex flex-col items-center mt-1 h-[130px] lg:h-[170px]">
          <div className="h-3/4 flex items-end justify-center">
            <img src={character.iconUrl} alt={character.nameId} />
          </div>
          <div
            className="w-full h-1/4 flex items-center justify-center"
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${bgFrom}, ${bgVia}, ${bgTo}`,
            }}
          >
            <p className="text-xs lg:text-sm xl:text-sm text-center font-semibold leading-3 mt-1 flex items-center h-full p-1">
              {character.name}
            </p>
          </div>
        </div>
        <div className="absolute top-0 left-0 flex items-center text-white p-2 ml-[-5px] mt-[-5px]">
          <img
            className="w-4 h-4 lg:w-5 lg:h-5"
            src={elementalImageFilter[character.element.name]}
            alt={elementalImageFilter[character.element.name]}
          />
        </div>
      </div>
    </Link>
  );
}
