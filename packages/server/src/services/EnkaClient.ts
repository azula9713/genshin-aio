import { EnkaClient } from "enka-network-api";

const enka = new EnkaClient({
  // imageBaseUrl: "https://api.ambr.top/assets/UI",
  imageBaseUrl: "https://cdn.shogunate.tools/assets/genshin",
});

enka.cachedAssetsManager.activateAutoCacheUpdater({
  instant: true, // Run the first update check immediately
  timeout: 60 * 60 * 1000, // 1 hour interval
  onUpdateStart: async () => {
    console.log("Updating Genshin Data...");
  },
  onUpdateEnd: async () => {
    enka.cachedAssetsManager.refreshAllData(); // Refresh memory
    console.log("Updating Completed!");
  },
});

export function getAllCharactersFromEnka() {
  return enka.getAllCharacters();
}

export function getCharacterByEnkaId(enkaId: number, skillDepotId: number) {
  return enka.getCharacterById(enkaId, skillDepotId);
}

export function getAllWeaponsFromEnka() {
  return enka.getAllWeapons();
}

export function getMaterialByEnkaId(materialId: number) {
  return enka.getMaterialById(materialId);
}
