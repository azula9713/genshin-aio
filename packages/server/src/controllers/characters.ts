import {
  CharacterData,
  ElementalBurst,
  ElementalSkill,
} from "enka-network-api";
import { Request, Response } from "express";

import { GetCharacterEnkaIdInput } from "../schemas/enkaCharacter.schema";
import {
  getAllChatactersFromEnka,
  getCharacterByEnkaId,
} from "../services/EnkaClient";
import characterMapping from "../utils/CharacterDictionary";
import {
  decryptTextAsset,
  mapAbility,
  mapAscensionData,
  mapConstellations,
  mapCostumes,
  mapPassiveTalents,
  mapSkills,
} from "../utils/EnkaAssetMapper";
import factionMapper from "../utils/FactionMapper";

import logger from "../utils/logger";
import uniqueIdMapper from "../utils/UniqueIdMapper";

export async function getAllCharacters(req: Request<{}, {}>, res: Response) {
  try {
    // Get all characters from Enka
    const response: CharacterData[] = getAllChatactersFromEnka();

    // Map each character to a more readable format
    const characters = response.map((character) => {
      const { _nameId, id, rarity, icon, element, skillDepotId } = character;

      return {
        id: uniqueIdMapper(_nameId, skillDepotId).toLowerCase(),
        enkaId: id,
        name: decryptTextAsset(character.name),
        nameId: character._nameId,
        rarity,
        iconUrl: icon.url,
        element: {
          id: element?.id,
          name: decryptTextAsset(element?.name),
        },
        skillDepotId,
      };
    });

    // Return the characters
    res.send(characters);
  } catch (error) {
    logger.error(error);
  }
}

export async function getCharacterById(
  req: Request<{}, {}, GetCharacterEnkaIdInput["query"]>,
  res: Response
) {
  const { characterNameId } = req.query;

  try {
    const { characterId, depotId } =
      characterMapping[characterNameId?.toString() as string];
    const characterData: CharacterData = getCharacterByEnkaId(
      Number(characterId),
      Number(depotId)
    );

    const skills = mapSkills(characterData.skills);
    const passiveTalents = mapPassiveTalents(characterData.passiveTalents);
    const constellations = mapConstellations(characterData.constellations);
    const costumes = mapCostumes(characterData.costumes);
    const ascensionData = mapAscensionData(characterData);

    const {
      id,
      name,
      _nameId: nameId,
      description,
      element,
      splashImage: { url: splashImageUrl } = {},
      rarity,
      stars,
      skillDepotId,
      nameCard,
    } = characterData;

    const character = {
      id,
      name: decryptTextAsset(name),
      nameId,
      affiliation: decryptTextAsset(characterData.details?.location),
      region: factionMapper(
        decryptTextAsset(characterData.details?.location) as string
      ),
      constellation: decryptTextAsset(characterData.details?.constellation),
      description: decryptTextAsset(description),
      element: {
        id: element?.id,
        name: decryptTextAsset(element?.name),
      },
      weaponType: characterData.weaponType,
      title: decryptTextAsset(characterData.details?.title),
      nameCard: nameCard?.pictures[1].url || "No Name Card",
      ascensionData,
      splashImageUrl,
      rarity,
      stars,
      costumes,
      skillDepotId,
      skills,
      passiveTalents,
      constellations,
      elementalSkill: mapAbility(
        characterData.elementalSkill as ElementalSkill
      ),
      elementalBurst: mapAbility(
        characterData.elementalBurst as ElementalBurst
      ),
      normalAttack: mapAbility(characterData.normalAttack),
    };

    res.send(character);
  } catch (error) {
    logger.error(error);
  }
}
