import { object, string, TypeOf } from "zod";

const queryPayload = {
  query: object({
    enkaId: string({ required_error: "Material Enka Id is required" }),
  }),
};

const getCMaterialByIdSchema = object({
  ...queryPayload,
});

type GetMaterialEnkaIdInput = TypeOf<typeof getCMaterialByIdSchema>;

export { GetMaterialEnkaIdInput, getCMaterialByIdSchema };
