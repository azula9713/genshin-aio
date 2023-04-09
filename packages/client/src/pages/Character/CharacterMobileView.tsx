import Overview from "@/components/Character/Overview";
import TalentsMobile from "@/components/Character/Mobile/Talents/TalentsMobile";
import AscensionMats from "@/components/Character/AscensionMats";
import MobileConstellationContainer from "@/components/Character/Mobile/Constellations/MobileConstellationContainer";
import CharacterProfileMobile from "@/components/Character/Mobile/CharacterProfileMobile";

import { ICharacterData } from "@/interfaces/CharacterInterface";

type Props = {
  characterData: ICharacterData;
  characterName: string;
  chapterIcon: string;
};

export default function CharacterMobileView({
  characterData,
  characterName,
  chapterIcon,
}: Props) {
  const {
    element,
    splashImageUrl,
    stars,
    name,
    weaponType,
    affiliation,
    ascensionData,
    constellation,
    constellations,
    passiveTalents,
    skills,
    description,
    region,
  } = characterData;

  return (
    <div className="pt-2 md:p-10 px-2 xl:hidden w-full">
      <CharacterProfileMobile
        charName={name}
        stars={stars}
        spalshImage={splashImageUrl}
        element={element}
      />
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

      {constellations && (
        <MobileConstellationContainer
          constellation={constellation}
          constellations={constellations}
          chapterIcon={chapterIcon}
        />
      )}

      {ascensionData && <AscensionMats ascensionData={ascensionData} />}
    </div>
  );
}
