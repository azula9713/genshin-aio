import { ICharacter } from "../interfaces/CharacterInterface";

function filterAllCharacters(
  characters: ICharacter[],
  selectedElement: string
): ICharacter[] {
  return characters
    .filter((character) => {
      if (
        selectedElement === character.element.name ||
        selectedElement === "all"
      ) {
        if (character.nameId === "PlayerGirl") {
          return ["Geo", "Dendro", "Pyro"].includes(character.element.name);
        } else if (character.nameId === "PlayerBoy") {
          return ["Anemo", "Electro", "Hydro", "Cryo"].includes(
            character.element.name
          );
        }

        return true;
      }

      return false;
    })
    .sort((a, b) => a.name.localeCompare(b.name));
}

export default filterAllCharacters;
