import { LazyLoadImage } from "react-lazy-load-image-component";

import LazyBackgroundImg from "@/components/Common/LazyBackgroundImg";
import RarityStars from "@/components/Character/RarityStars";
import CharacterProfile from "@/components/Character/PC/CharacterProfile";
import Overview from "@/components/Character/Overview";
import CharacterTalentsContainer from "@/components/Character/PC/Talents/CharacterTalentsContainer";

import { ICharacterData } from "@/interfaces/CharacterInterface";
import elementalImageFilter from "@/static/ElementalImagePicker";
import StaticNameCard from "@/assets/images/namecards/UI_NameCardPic_0_P.png";
import CharacterConstellationContainer from "@/components/Character/PC/Constellations/CharacterConstellationContainer";
import { constellationIconFilter } from "@/static/ChapterIconFilter";
import capitalizeFirstLetter from "@/functions/CapitalizeFirstLetter";
import { useEffect, useState } from "react";

type Props = {
  characterData: ICharacterData;
  characterName: string;
};

export default function CharacterPCView({
  characterData,
  characterName,
}: Props) {
  const {
    element,
    splashImageUrl,
    nameCard,
    stars,
    name,
    skills,
    passiveTalents,
    weaponType,
    affiliation,
    constellation,
    constellations,
    description,
    title,
    region,
    nameId,
  } = characterData;

  const [chapterIcon, setChapterIcon] = useState<string>("");

  useEffect(() => {
    async function loadImage() {
      const chapterUrl = await constellationIconFilter(
        capitalizeFirstLetter(characterName)
      );

      setChapterIcon(chapterUrl);
    }
    loadImage();
  }, [characterName]);

  return (
    <div className="py-4 px-12 flex-col items-center justify-start space-y-8 hidden xl:flex">
      <LazyBackgroundImg
        img={nameCard === "No Name Card" ? StaticNameCard : nameCard}
        isDarkened
        className="hidden xl:flex w-[calc(100%-3rem)] 2xl:min-w-[calc(1500px-3rem)] flex-col relative items-start justify-between p-10 xl:h-[650px] 2xl:h-[700px] rounded-lg"
      >
        <div className="w-2/3 flex flex-col items-start mr-4 absolute z-10">
          <div className="flex items-center justify-start space-x-1 mb-5">
            <img
              className="w-10 h-10 mr-2"
              src={elementalImageFilter[element?.name]}
              alt={element?.id}
            />
            <RarityStars stars={stars} />
          </div>
          <CharacterProfile
            title={title}
            name={name}
            description={description}
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
        </div>
        <div className="w-full xl:h-[400px] 2xl:h-[700px] flex items-center justify-end">
          <div className={`w-4/5 h-full ${nameId}`}>
            <LazyLoadImage
              src={splashImageUrl}
              alt={name}
              effect="blur"
              style={{
                height: "100%",
                marginLeft: "18%",
                marginTop: "5%",
                scale: "1.2",
              }}
            />
          </div>
        </div>
      </LazyBackgroundImg>
      <CharacterTalentsContainer
        element={element}
        skills={skills}
        passiveTalents={passiveTalents}
      />
      <CharacterConstellationContainer
        consName={constellation}
        constellations={constellations}
        chapterIcon={chapterIcon}
      />
    </div>
  );
}
