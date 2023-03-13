import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

import Container from "../../components/Layout/Container";
import { urlParamExtractor } from "../../functions/UrlParamExtractor";
import { ICharacterData } from "../../interfaces/CharacterInterface";
import { fetchEnkaCharacterById } from "../../services/enka/characters";

import ElectroBG from "../../assets/images/bgs/constellation_template__electro.jpg";
import CryoBG from "../../assets/images/bgs/constellation_template__cryo.jpg";
import PyroBG from "../../assets/images/bgs/constellation_template__pyro.jpg";
import HydroBG from "../../assets/images/bgs/constellation_template__hydro.png";
import AnemoBG from "../../assets/images/bgs/constellation_template__anemo.jpg";
import GeoBG from "../../assets/images/bgs/constellation_template__geo.jpg";
import DendroBG from "../../assets/images/bgs/constellation_template__dendro.jpg";
import RarityStars from "./RarityStars";
import Overview from "./Overview";

export default function Character() {
  const location = useLocation();

  const { characterEnkaId, characterName, skillDepotId } = urlParamExtractor(
    location.pathname
  );

  const { isError, isLoading, data } = useQuery(
    ["fetchEnkkaCharacterData", characterEnkaId, skillDepotId],
    () => fetchEnkaCharacterById(characterEnkaId, skillDepotId)
  );

  const [characterData, setCharacterData] = useState<ICharacterData>(
    {} as ICharacterData
  );

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
      <div className="pt-2 px-2 md:hidden">
        <div
          className="h-full w-full rounded-lg"
          style={{
            backgroundImage: elementalBgPicker[characterData.element?.name],
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center center",
            backgroundSize: "cover",
          }}
        >
          <div
            className="h-[420px] w-full flex flex-col items-start justify-end"
            style={{
              backgroundImage: `url(${characterData.splashImageUrl})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          >
            <div className="flex flex-col items-start w-full pl-4">
              <RarityStars stars={characterData.stars} />
              <h2
                className="font-algoindeEnka  pb-2 text-2xl drop-shadow-2xl shadow-balck"
                style={{
                  textShadow: "2px 2px black",
                }}
              >
                {characterData.name}
              </h2>
            </div>
          </div>
        </div>
        <Overview
          element={characterData.element?.name}
          weapon={characterData.weapon}
          affiliation={characterData.affiliation}
          constellation={characterData.constellation}
        />
      </div>
    </Container>
  );
}
