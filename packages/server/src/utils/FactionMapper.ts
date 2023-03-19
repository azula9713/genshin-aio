import Factions from "../static/FactionData.json";

interface IFactionData {
  regionName: string;
  icon: string;
}

interface IFactions {
  [key: string]: IFactionData;
}

export default function factionMapper(affiliation: string) {
  const factions: IFactions = Factions;

  let faction = {
    regionName: "-",
    icon: "",
  };

  // Iterate over the keys of factions object
  Object.keys(factions).forEach((key) => {
    if ((affiliation.includes(key) && key !== "-") || affiliation === key) {
      // If affiliation contains a part of the key, set faction to the corresponding value in factions
      faction = factions[key];
    }
  });

  return faction;
}
