import instance from "../axios";

async function fetchAllCharacters() {
  const result = await instance.get("/api/v1/enkaCharacters/all");

  return result.data;
}

async function fetchEnkaCharacterById(
  enkaId: string,
  enkaSkillDepotId: string
) {
  const result = await instance.get("/api/v1/enkaCharacters/CharacterData", {
    params: { enkaId, enkaSkillDepotId },
  });

  return result.data;
}

export { fetchAllCharacters, fetchEnkaCharacterById };
