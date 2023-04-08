import RarityStars from "@/components/Character/RarityStars";
import Overview from "@/components/Character/Overview";
import TalentsMobile from "@/components/Character/Mobile/TalentsMobile";
import AscensionMats from "@/components/Character/AscensionMats";
import LazyBackgroundImg from "@/components/Common/LazyBackgroundImg";

import { ICharacterData } from "@/interfaces/CharacterInterface";

import ElectroBG from "@/assets/images/bgs/constellation_template__electro.jpg";
import CryoBG from "@/assets/images/bgs/constellation_template__cryo.jpg";
import PyroBG from "@/assets/images/bgs/constellation_template__pyro.jpg";
import HydroBG from "@/assets/images/bgs/constellation_template__hydro.png";
import AnemoBG from "@/assets/images/bgs/constellation_template__anemo.jpg";
import GeoBG from "@/assets/images/bgs/constellation_template__geo.jpg";
import DendroBG from "@/assets/images/bgs/constellation_template__dendro.jpg";

type Props = {
  characterData: ICharacterData;
  characterName: string;
};

export default function CharacterMobileView({
  characterData,
  characterName,
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

  const {
    element,
    splashImageUrl,
    stars,
    name,
    weaponType,
    affiliation,
    ascensionData,
    constellation,
    passiveTalents,
    skills,
    description,
    region,
  } = characterData;

  return (
    <div className="pt-2 md:p-10 px-2 xl:hidden w-full">
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
              {name}
            </h2>
          </div>
        </LazyBackgroundImg>
      </LazyBackgroundImg>
      <Overview
        element={element?.name}
        weapon={weaponType}
        affiliation={affiliation}
        region={region}
        constellation={constellation}
        description={description}
        name={characterName}
      />

      {skills && passiveTalents && (
        <TalentsMobile skills={skills} passiveTalents={passiveTalents} />
      )}

      {ascensionData && <AscensionMats ascensionData={ascensionData} />}
    </div>
  );
}
