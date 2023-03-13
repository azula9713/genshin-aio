import { atom } from "recoil";

const selectedElementAtom = atom({
  key: "selectedElementAtom",
  default: "all",
});

export { selectedElementAtom };
