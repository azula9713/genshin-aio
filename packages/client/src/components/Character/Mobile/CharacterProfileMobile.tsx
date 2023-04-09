import LazyBackgroundImg from "@/components/Common/LazyBackgroundImg";
import RarityStars from "../RarityStars";

import ElectroBG from "@/assets/images/bgs/constellation_template__electro.jpg";
import CryoBG from "@/assets/images/bgs/constellation_template__cryo.jpg";
import PyroBG from "@/assets/images/bgs/constellation_template__pyro.jpg";
import HydroBG from "@/assets/images/bgs/constellation_template__hydro.png";
import AnemoBG from "@/assets/images/bgs/constellation_template__anemo.jpg";
import GeoBG from "@/assets/images/bgs/constellation_template__geo.jpg";
import DendroBG from "@/assets/images/bgs/constellation_template__dendro.jpg";
import { IElementType } from "@/interfaces/CharacterInterface";

type Props = {
  charName: string;
  stars: number;
  spalshImage: string;
  element: {
    id: string;
    name: IElementType;
  };
};

export default function CharacterProfileMobile({
  charName,
  stars,
  spalshImage: splashImageUrl,
  element,
}: Props) {
  const elementalBgPicker = {
    Dendro: DendroBG,
    Geo: GeoBG,
    Anemo: AnemoBG,
    Hydro: HydroBG,
    Pyro: PyroBG,
    Cryo: CryoBG,
    Electro: ElectroBG,
  };
  return (
    <LazyBackgroundImg
      className="h-full w-full rounded-lg"
      img={elementalBgPicker[element?.name]}
    >
      <LazyBackgroundImg
        className="h-[420px] md:h-[520px] w-full flex flex-col items-start justify-end rounded-lg"
        img={splashImageUrl}
      >
        <div className="flex flex-col items-start w-full pl-4">
          <RarityStars stars={stars} />
          <h2
            className="font-algoindeEnka pb-2 text-2xl md:text-4xl drop-shadow-2xl text-white"
            style={{
              textShadow: "2px 2px black",
            }}
          >
            {charName}
          </h2>
        </div>
      </LazyBackgroundImg>
    </LazyBackgroundImg>
  );
}
