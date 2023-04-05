export type IElementType =
  | "Anemo"
  | "Geo"
  | "Electro"
  | "Dendro"
  | "Hydro"
  | "Pyro"
  | "Cryo";

export type IRarityType =
  | "QUALITY_PURPLE"
  | "QUALITY_ORANGE"
  | "QUALITY_ORANGE_SP";

export type IWeaponType =
  | "WEAPON_SWORD_ONE_HAND"
  | "WEAPON_CLAYMORE"
  | "WEAPON_POLE"
  | "WEAPON_CATALYST"
  | "WEAPON_BOW";

export type IWeaponByCharacter = {
  weaponType: IWeaponType;

  signatureWeapon: number | string;
  name: string;
  icon: string;
};
export interface ICharacter {
  id: string;
  enkaId: string;
  name: string;
  nameId: string;
  rarity: IRarityType;
  iconUrl: string;
  element: {
    id: string;
    name: IElementType;
  };
}

export interface ITalent {
  id: number;
  name: string;
  icon: string;
  description: string;
}

export interface IRegion {
  regionName: string;
  icon: string;
}

export interface IAscensionData {
  scoinCost: number;
  costItems: [
    {
      id: number;
      count: number;
    }
  ];
  addProps: [propType: string];
}

export interface ICharacterData extends ICharacter {
  description: string;
  title: string;
  weaponType: IWeaponType;
  ascensionData: IAscensionData[];
  affiliation: string;
  region: IRegion;
  constellation: string;
  splashImageUrl: string;
  nameCard: string;
  stars: number;
  costumes: {
    id: number;
    name: string;
    description: string;
    icon?: string;
  }[];
  skills: ITalent[];
  passiveTalents: ITalent[];
  constellations: {
    id: number;
    name: string;
    description: string;
  }[];
}
