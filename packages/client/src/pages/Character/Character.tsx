import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

import ElectroBG from "../../assets/images/bgs/constellation_template__electro.jpg";
import CryoBG from "../../assets/images/bgs/constellation_template__cryo.jpg";
import PyroBG from "../../assets/images/bgs/constellation_template__pyro.jpg";
import HydroBG from "../../assets/images/bgs/constellation_template__hydro.png";
import AnemoBG from "../../assets/images/bgs/constellation_template__anemo.jpg";
import GeoBG from "../../assets/images/bgs/constellation_template__geo.jpg";
import DendroBG from "../../assets/images/bgs/constellation_template__dendro.jpg";
import StaticNameCard from "../../assets/images/namecards/UI_NameCardPic_0_P.png";

import { urlParamExtractor } from "../../functions/UrlParamExtractor";
import { ICharacterData } from "../../interfaces/CharacterInterface";
import { fetchEnkaCharacterById } from "../../services/enka/characters";
import Container from "../../components/Layout/Container";
import RarityStars from "../../components/Character/RarityStars";
import Overview from "../../components/Character/Overview";
import AscensionMats from "../../components/Character/AscensionMats";
import Talents from "../../components/Character/Talents";

export default function Character() {
  const location = useLocation();
  const characterName = urlParamExtractor(location.pathname);

  const { isError, isLoading, data } = useQuery(
    ["fetchEnkkaCharacterData", characterName],
    () => fetchEnkaCharacterById(characterName)
  );

  const [characterData, setCharacterData] = useState<ICharacterData>(
    {} as ICharacterData
  );

  const {
    element,
    splashImageUrl,
    nameCard,
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

  const elementalBgPicker = {
    Dendro: `url(${DendroBG})`,
    Geo: `url(${GeoBG})`,
    Anemo: `url(${AnemoBG})`,
    Hydro: `url(${HydroBG})`,
    Pyro: `url(${PyroBG})`,
    Cryo: `url(${CryoBG})`,
    Electro: `url(${ElectroBG})`,
  };

  useEffect(() => {
    if (data) {
      console.log("Character data", data);
      setCharacterData(data);
    }
  }, [location, data]);

  if (isError) {
    return (
      <Container>
        <div className="min-h-[calc(100vh-4rem)] pt-2 px-4 md:px-12">
          <div>
            <h2>Error loading {characterName}</h2>
          </div>
        </div>
      </Container>
    );
  }

  if (isLoading) {
    return (
      <Container>
        <div className="min-h-[calc(100vh-4rem)] pt-2 px-4 md:px-12">
          <div>
            <h2>{characterName} is Loading</h2>
          </div>
        </div>
      </Container>
    );
  }

  return (
    <Container>
      {/* Mobile and TabletView */}
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
      {/* Mobile and TabletView End*/}

      {/* PC View */}
      <div
        className="coverBg hidden xl:flex w-[calc(100%-3rem)] flex-col relative items-start justify-between p-10 xl:min-h-[600px] 2xl:max-h-[800px] m-4 rounded-lg"
        style={{
          backgroundImage: `linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url(${
            nameCard || StaticNameCard
          })`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          position: "relative",
        }}
      >
        <div className="w-1/2 flex flex-col items-start xl:h-[600px] 2xl:h-[800px] mr-4 absolute z-10">
          <div className="w-full flex items-center justify-start space-x-6">
            <h2 className="font-algoindeEnka xl:text-5xl 2xl:text-6xl">
              {name}
            </h2>
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
          <div className={`w-4/5 h-full ${characterName}`}>
            <img
              src={splashImageUrl}
              alt=""
              style={{
                height: "100%",
                marginLeft: "15%",
                scale: "110%",
              }}
            />
          </div>
        </div>
      </div>
    </Container>
  );
}
