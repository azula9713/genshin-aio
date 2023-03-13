export function urlParamExtractor(urlParam: string) {
  const regex = /^\/character\/(\d+)([a-zA-Z]+)(\d+)$/;

  const match = urlParam.match(regex);

  let skillDepotId = "";
  let characterName = "";
  let characterEnkaId = "";

  if (match) {
    skillDepotId = match[1]; // "7801"
    characterName = match[2]; // "Alhatham"
    characterEnkaId = match[3]; // "10000078"

    return { skillDepotId, characterName, characterEnkaId };
  } else {
    // handle case when the string does not match the pattern
    return {
      skillDepotId,
      characterName,
      characterEnkaId,
    };
  }
}
