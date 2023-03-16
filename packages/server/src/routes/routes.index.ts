import { Express } from "express";

import characterRoutes from "./enkaCharacterRoutes";
import weaponRoutes from "./enkaWeaponRoutes";
import materialRoutes from "./enkaMaterialRoutes";

const routes = (server: Express): void => {
  server.use("/api/v1/enkaCharacters", characterRoutes);
  server.use("/api/v1/enkaWeapons", weaponRoutes);
  server.use("/api/v1/enkaMaterials", materialRoutes);
};

export default routes;
