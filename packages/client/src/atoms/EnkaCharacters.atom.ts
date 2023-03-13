import { atom } from "recoil";
import { ICharacter } from "../interfaces/CharacterInterface";

const allEnkaCharactersAtom = atom({
  key: "allEnkaCharactersAtom",
  default: [] as ICharacter[],
});

export { allEnkaCharactersAtom };
