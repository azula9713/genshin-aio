import { LazyLoadImage } from "react-lazy-load-image-component";

import Overview from "../../components/Character/Overview";
import RarityStars from "../../components/Character/RarityStars";
import LazyBackgroundImg from "../../components/Common/LazyBackgroundImg";
import { ICharacterData } from "../../interfaces/CharacterInterface";

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
    weaponType,
    affiliation,
    constellation,
    description,
    region,
    nameId,
  } = characterData;
  return (
    <LazyBackgroundImg
      img={nameCard === "No Name Card" ? StaticNameCard : nameCard}
      className="hidden xl:flex w-[calc(100%-3rem)] flex-col relative items-start justify-between p-10 xl:min-h-[600px] 2xl:max-h-[800px] m-4 rounded-lg"
    >
      <div className="w-1/2 flex flex-col items-start xl:h-[600px] 2xl:h-[800px] mr-4 absolute z-10">
        <div className="w-full flex items-center justify-start space-x-6">
          <h2 className="font-algoindeEnka xl:text-5xl 2xl:text-6xl">{name}</h2>
          <RarityStars stars={stars} />
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
      </div>
      <div className="w-full h-[600px] 2xl:h-[800px] flex items-center justify-end">
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
