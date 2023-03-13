import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { allEnkaCharactersAtom } from "../../atoms/EnkaCharacters.atom";
import { selectedElementAtom } from "../../atoms/SelectedItems.atoms";
import { ICharacter } from "../../interfaces/CharacterInterface";
import { fetchAllCharacters } from "../../services/enka/characters";
import CharacterThumbnail from "./CharacterThumbnail";

export default function AllCharacterShowcase() {
  const [characters, setCharacters] = useRecoilState(allEnkaCharactersAtom);
  const selectedElement = useRecoilValue(selectedElementAtom);

  const { isError, isLoading, data } = useQuery(
    "fetchAllEnkaCharacters",
    fetchAllCharacters
  );

  useEffect(() => {
    if (data && data.length > 0) {
      setCharacters(data);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="overflow-x-hidden w-full items-center justify-center flex px-4 md:px-12">
      <div className="flex flex-wrap mt-2 items-center justify-start">
        {characters
          .filter((character) => {
            if (
              selectedElement === character.element.name ||
              selectedElement === "all"
            ) {
              if (character.nameId === "PlayerGirl") {
                return ["Geo", "Dendro", "Pyro"].includes(
                  character.element.name
                );
              } else if (character.nameId === "PlayerBoy") {
                return ["Anemo", "Electro", "Hydro", "Cryo"].includes(
                  character.element.name
                );
              }

              return true;
            }

            return false;
          })
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((character: ICharacter) => (
            <CharacterThumbnail character={character} key={character.id} />
          ))}
      </div>
    </div>
  );
}
