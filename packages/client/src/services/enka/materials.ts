import instance from "../axios";

async function fetchEnkaMaterialById(enkaId: string) {
  const result = await instance.get("/api/v1/enkamaterials/MaterialData", {
    params: { enkaId },
  });

  return result.data;
}

export { fetchEnkaMaterialById };
