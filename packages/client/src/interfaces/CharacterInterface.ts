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

export type IWeaponByCharacter = {
  weaponType:
    | "WEAPON_SWORD_ONE_HAND"
    | "WEAPON_CLAYMORE"
    | "WEAPON_POLE"
    | "WEAPON_CATALYST"
    | "WEAPON_BOW";
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

export interface ICharacterData extends ICharacter {
  description: string;
  weapon: IWeaponByCharacter;
  affiliation: string;
  constellation: string;
  splashImageUrl: string;
  stars: number;
  costumes: {
    id: number;
    name: string;
    description: string;
    icon?: string;
  }[];
  skills: {
    id: number;
    name: string;
    description: string;
    icon: string;
  }[];
  passiveTalents: {
    id: number;
    name: string;
    description: string;
    icon: string;
  }[];
  constellations: {
    id: number;
    name: string;
    description: string;
  }[];
}
