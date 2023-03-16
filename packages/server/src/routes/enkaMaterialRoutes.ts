import { Router } from "express";

import { getMaterialById } from "../controllers/materials";
import validate from "../middleware/validateResource";
import { getCMaterialByIdSchema } from "../schemas/enkaMaterials.schema";

const router = Router();

router.route("/").get((_req, res) => {
  res.send("Material API running");
});

router
  .route("/materialData")
  .get(validate(getCMaterialByIdSchema), getMaterialById);

export default router;
