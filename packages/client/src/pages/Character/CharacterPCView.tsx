import { LazyLoadImage } from "react-lazy-load-image-component";

import Overview from "../../components/Character/Overview";
import RarityStars from "../../components/Character/RarityStars";
import LazyBackgroundImg from "../../components/Common/LazyBackgroundImg";
import { ICharacterData } from "../../interfaces/CharacterInterface";

import StaticNameCard from "../../assets/images/namecards/UI_NameCardPic_0_P.png";
import "react-lazy-load-image-component/src/effects/blur.css";
import TalentsDesktop from "../../components/Character/TalentsDesktop";
import elementalImageFilter from "../../static/ElementalImagePicker";

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
  return (
    <LazyBackgroundImg
      img={nameCard === "No Name Card" ? StaticNameCard : nameCard}
      // img=""
      isDarkened
      className="hidden xl:flex w-[calc(100%-3rem)] flex-col relative items-start justify-between p-10 xl:min-h-[calc(125vh-6rem)] 2xl:min-h-[calc(105vh-6rem)] h-max m-4 rounded-lg"
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
        <div className="w-full flex flex-col items-start justify-center">
          <h2 className="font-algoindeEnka xl:text-5xl 2xl:text-8xl">{name}</h2>
          <h4 className="uppercase font-semibold text-3xl italic tracking-widest mt-6 font-algoindeEnka">
            {title}
          </h4>

          {/* description */}
          <p className="mt-6 text-2xl font-semibold leading-8 tracking-wide text-white w-2/3 italic">
            "
            {description?.split(" ").length > 100 ? (
              <span>
                {description?.split(" ").slice(0, 100).join(" ")}...
                <span className="text-blue-500">Read More</span>
              </span>
            ) : (
              description
            )}
            "
          </p>
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

        <div className="2xl:w-3/4 xl:w-full mx-4 my-10">
          <TalentsDesktop title="Hero Skills" talents={skills} />
          <TalentsDesktop title="Passive Talents" talents={passiveTalents} />
        </div>
      </div>
      <div className="w-full xl:min-h-[calc(100vh-12rem)] flex items-center justify-end">
        <div className={`w-4/5 h-full ${nameId}`}>
          <LazyLoadImage
            src={splashImageUrl}
            alt={name}
            effect="blur"
            style={{
              height: "100%",
              marginLeft: "15%",
              scale: "110%",
            }}
          />
        </div>
      </div>
    </LazyBackgroundImg>
  );
}
