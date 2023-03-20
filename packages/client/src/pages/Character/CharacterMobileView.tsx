import AscensionMats from "../../components/Character/AscensionMats";
import RarityStars from "../../components/Character/RarityStars";
import Talents from "../../components/Character/Talents";
import Overview from "../../components/Character/Overview";

import ElectroBG from "../../assets/images/bgs/constellation_template__electro.jpg";
import CryoBG from "../../assets/images/bgs/constellation_template__cryo.jpg";
import PyroBG from "../../assets/images/bgs/constellation_template__pyro.jpg";
import HydroBG from "../../assets/images/bgs/constellation_template__hydro.png";
import AnemoBG from "../../assets/images/bgs/constellation_template__anemo.jpg";
import GeoBG from "../../assets/images/bgs/constellation_template__geo.jpg";
import DendroBG from "../../assets/images/bgs/constellation_template__dendro.jpg";
import { ICharacterData } from "../../interfaces/CharacterInterface";

type Props = {
  characterData: ICharacterData;
  characterName: string;
};

export default function CharacterMobileView({
  characterData,
  characterName,
}: Props) {
  const elementalBgPicker = {
    Dendro: `url(${DendroBG})`,
    Geo: `url(${GeoBG})`,
    Anemo: `url(${AnemoBG})`,
    Hydro: `url(${HydroBG})`,
    Pyro: `url(${PyroBG})`,
    Cryo: `url(${CryoBG})`,
    Electro: `url(${ElectroBG})`,
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
      <div
        className="h-full w-full rounded-lg"
        style={{
          backgroundImage: elementalBgPicker[element?.name],
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <div
          className="h-[420px] md:h-[520px] w-full flex flex-col items-start justify-end"
          style={{
            backgroundImage: `url(${splashImageUrl})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
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
        </div>
      </div>
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
        <Talents skills={skills} passiveTalents={passiveTalents} />
      )}

      {ascensionData && <AscensionMats ascensionData={ascensionData} />}
    </div>
  );
}
