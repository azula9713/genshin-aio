import { useMemo, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

import CharacterProfile from "../../components/Character/PC/CharacterProfile";
import Overview from "../../components/Character/Overview";
import RarityStars from "../../components/Character/RarityStars";
import CharacterTalentDetails from "../../components/Character/PC/CharacterTalentDetails";
import TalentIcon from "../../components/Character/PC/TalentIcon";
import LazyBackgroundImg from "../../components/Common/LazyBackgroundImg";
import {
  IAllTalent,
  ICharacterData,
} from "../../interfaces/CharacterInterface";
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
  const [allTalents, setAllTalents] = useState<IAllTalent[]>([]);

  useMemo(() => {
    if (skills?.length > 0 && passiveTalents?.length > 0) {
      //add an attribute to the talent to determine if it is a passive or not to a new array with new type

      const newSkills = skills.map((skill) => {
        return {
          ...skill,
          isPassive: false,
        };
      });

      const newPassiveTalents = passiveTalents.map((passiveTalent) => {
        return {
          ...passiveTalent,
          isPassive: true,
        };
      });

      setAllTalents([...newSkills, ...newPassiveTalents]);
    }
  }, [skills, passiveTalents]);

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
      <div className="w-full px-7 py-4 overflow-hidden">
        <div className="w-full flex flex-col items-start justify-center mt-8">
          <h4 className="font-algoindeEnka text-6xl">Talents</h4>
          <div className="w-full flex items-center justify-start space-x-8 mt-8 mb-6">
            {/* merge skills and passive talents to a one array and map. Filter out talents without name  */}
            {allTalents &&
              allTalents
                .filter((skill) => skill.name !== "")
                .map((skill) => (
                  <TalentIcon
                    talent={skill}
                    key={skill.id}
                    selectedTalentId={selectedTalentId}
                    setSelectedTalentId={setSelectedTalentId}
                    element={element?.name}
                  />
                ))}
          </div>
        </div>
        <CharacterTalentDetails
          selectedTalent={allTalents?.find(
            (skill) => skill.id === selectedTalentId
          )}
        />
      </div>
    </div>
  );
}
