import { Link } from "react-router-dom";

import { ICharacter } from "../../interfaces/CharacterInterface";
import colorFilter, { bgColorFilter } from "../../static/ThumbnailColourFilter";
import elementalImageFilter from "../../static/ElementalImagePicker";
import CustomLinkCursor from "../../assets/cursor/Genshin-Impact-Link-Select.png";

type Props = {
  character: ICharacter;
};

export default function CharacterThumbnail({ character }: Props) {
  const {
    toColor: bgTo,
    fromColor: bgFrom,
    viaColor: bgVia,
  } = colorFilter[character.rarity];

  return (
    <div
      style={{ backgroundColor: bgColorFilter[character.rarity] }}
      className="mx-3 w-[100px] relative lg:w-[130px] rounded-xl shadow-lg drop-shadow-md shadow-[#d6d6d6] dark:shadow-[#323333] overflow-hidden mb-5"
    >
      <Link
        to={`/character/${character.id}`}
        style={{
          cursor: "url(" + CustomLinkCursor + "), auto",
        }}
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
            <p className="text-sm text-center font-semibold leading-3 mt-1 flex items-center h-full p-1 text-white">
              {character.name}
            </p>
          </div>
        </div>
      </Link>
      <div className="absolute top-0 left-0 flex items-center text-white p-2 ml-[-5px] mt-[-5px]">
        <img
          className="w-4 h-4 lg:w-5 lg:h-5"
          src={elementalImageFilter[character.element.name]}
          alt={elementalImageFilter[character.element.name]}
        />
      </div>
    </div>
  );
}
