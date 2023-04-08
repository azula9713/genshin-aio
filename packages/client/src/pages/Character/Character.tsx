import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";

import Container from "@/components/Layout/Container";
import CharacterMobileView from "./CharacterMobileView";
import CharacterPCView from "./CharacterPCView";

import { urlParamExtractor } from "@/functions/UrlParamExtractor";
import { fetchEnkaCharacterById } from "@/services/enka/characters";
import { ICharacterData } from "@/interfaces/CharacterInterface";

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

      <CharacterMobileView
        characterData={characterData}
        characterName={characterName}
      />

      {/* PC View  */}
      <CharacterPCView
        characterData={characterData}
        characterName={characterName}
      />
    </Container>
  );
}
