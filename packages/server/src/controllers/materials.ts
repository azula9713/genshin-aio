import { Material } from "enka-network-api";
import { Request, Response } from "express";

import { GetMaterialEnkaIdInput } from "../schemas/enkaMaterials.schema";
import { getMaterialByEnkaId } from "../services/EnkaClient";
import { decryptTextAsset } from "../utils/EnkaAssetMapper";
import logger from "../utils/logger";

export const getMaterialById = async (
  req: Request<{}, {}, GetMaterialEnkaIdInput["query"]>,
  res: Response
) => {
  const { enkaId } = req.query;

  try {
    const response: Material = getMaterialByEnkaId(Number(enkaId));

    const materialData = {
      enkaId: response.id,
      name: decryptTextAsset(response.name),
      description: decryptTextAsset(response.description),
      icon: response.icon.url,
      materialType: response.materialType,
      itemType: response.itemType,
      stars: response.stars,
      picture: response.pictures,
    };

    res.send(materialData);
  } catch (error) {
    logger.error(error);
  }
};
