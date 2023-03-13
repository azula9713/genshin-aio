import AnemoSVG from "../assets/images/elements/Element_Anemo.svg";
import GeoSVG from "../assets/images/elements/Element_Geo.svg";
import ElectroSVG from "../assets/images/elements/Element_Electro.svg";
import DendroSVG from "../assets/images/elements/Element_Dendro.svg";
import HydroSVG from "../assets/images/elements/Element_Hydro.svg";
import PyroSVG from "../assets/images/elements/Element_Pyro.svg";
import CryoSVG from "../assets/images/elements/Element_Cryo.svg";

interface ElementalImageFilter {
  [key: string]: string;
  Anemo: string;
  Electro: string;
  Geo: string;
  Dendro: string;
  Hydro: string;
  Pyro: string;
  Cryo: string;
}

const elementalImageFilter: ElementalImageFilter = {
  Anemo: AnemoSVG,
  Electro: ElectroSVG,
  Geo: GeoSVG,
  Dendro: DendroSVG,
  Hydro: HydroSVG,
  Pyro: PyroSVG,
  Cryo: CryoSVG,
};

export default elementalImageFilter;
