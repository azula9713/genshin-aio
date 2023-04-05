import React from "react";
import { ITalent } from "../../../interfaces/CharacterInterface";

type Props = {
  selectedTalent?: ITalent;
};

export default function CharacterTalentDetails({ selectedTalent }: Props) {
  return (
    <div>
      <h1>{selectedTalent?.name}</h1>
    </div>
  );
}
