import { useEffect } from "react";
import { useQuery } from "react-query";
import { useRecoilState, useRecoilValue } from "recoil";
import { motion } from "framer-motion";

import { allEnkaCharactersAtom } from "@/atoms/EnkaCharacters.atom";
import { selectedElementAtom } from "@/atoms/SelectedItems.atoms";
import { fetchAllCharacters } from "@/services/enka/characters";
import filterAllCharacters from "@/functions/FilterAllCharacters";
import { ICharacter } from "@/interfaces/CharacterInterface";
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
      setCharacters(filterAllCharacters(data, selectedElement));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, selectedElement]);

  if (isError) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div className="overflow-hidden w-full items-center justify-center flex px-4 md:px-12">
      <motion.div
        layout
        animate={{ opacity: 1 }}
        className="mt-2 grid auto-cols-fr grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-7 2xl:grid-cols-8"
      >
        {characters.map((character: ICharacter) => (
          <CharacterThumbnail character={character} key={character.id} />
        ))}
      </motion.div>
    </div>
  );
}
