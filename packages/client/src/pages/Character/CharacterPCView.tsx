import { useMemo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import CharacterProfile from "../../components/Character/PC/CharacterProfile";
import Overview from "../../components/Character/Overview";
import RarityStars from "../../components/Character/RarityStars";
import CharacterSkill from "../../components/Character/PC/CharacterTalent";
import TalentIcon from "../../components/Character/PC/TalentIcon";
import LazyBackgroundImg from "../../components/Common/LazyBackgroundImg";
import { ICharacterData } from "../../interfaces/CharacterInterface";
import elementalImageFilter from "../../static/ElementalImagePicker";

import StaticNameCard from "../../assets/images/namecards/UI_NameCardPic_0_P.png";
import "react-lazy-load-image-component/src/effects/blur.css";

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
    description,
    title,
    region,
    nameId,
  } = characterData;

  const [selectedTalentId, setSelectedTalentId] = useState<number>(0);

  useMemo(() => {
    if (skills && skills.length > 0) {
      setSelectedTalentId(skills[0].id);
    }
  }, [skills]);

  return (
    <div className="py-4 px-12 flex flex-col items-center justify-start space-y-8">
      <LazyBackgroundImg
        img={nameCard === "No Name Card" ? StaticNameCard : nameCard}
        isDarkened
        className="hidden xl:flex w-[calc(100%-3rem)] flex-col relative items-start justify-between p-10 xl:h-[650px] 2xl:h-[900px] rounded-lg"
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
        <div className="w-full xl:h-[400px] 2xl:h-[1px] flex items-center justify-end">
          <div className={`w-4/5 h-full ${nameId}`}>
            <LazyLoadImage
              src={splashImageUrl}
              alt={name}
              effect="blur"
              style={{
                height: "100%",
                marginLeft: "18%",
                marginTop: "7%",
                scale: "1.5",
              }}
            />
          </div>
        </div>
      </LazyBackgroundImg>
      <div className="w-full px-7 py-4">
        <div className="w-full flex items-center justify-start">
          <h4 className="font-algoindeEnka text-4xl">Talents</h4>
          <div className="w-full ml-8 flex items-center justify-start space-x-2">
            {characterData.skills?.map((skill, index) => (
              <TalentIcon
                talent={skill}
                key={skill.id}
                selectedTalentId={selectedTalentId}
                setSelectedTalentId={setSelectedTalentId}
              />
            ))}
          </div>
        </div>
        <CharacterSkill
          selectedTalent={characterData.skills?.find(
            (skill) => skill.id === selectedTalentId
          )}
        />
      </div>
    </div>
  );
}
