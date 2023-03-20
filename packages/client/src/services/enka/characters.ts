import instance from "../axios";

async function fetchAllCharacters() {
  const result = await instance.get("/api/v1/enkaCharacters/all");

  return result.data;
}

async function fetchEnkaCharacterById(characterNameId: string) {
  const result = await instance.get("/api/v1/enkaCharacters/CharacterData", {
    params: { characterNameId },
  });

  return result.data;
}

export { fetchAllCharacters, fetchEnkaCharacterById };
