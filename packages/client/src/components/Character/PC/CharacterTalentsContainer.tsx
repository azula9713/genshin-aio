import React, { useMemo, useState } from "react";
import TalentIcon from "./TalentIcon";
import {
  IAllTalent,
  IElementType,
  ITalent,
} from "../../../interfaces/CharacterInterface";
import CharacterTalentDetails from "./CharacterTalentDetails";
import Title from "../../Common/Typography/Title";

type Props = {
  element: {
    id: string;
    name: IElementType;
  };
  skills: ITalent[];
  passiveTalents: ITalent[];
};

export default function CharacterTalentsContainer({
  element,
  skills,
  passiveTalents,
}: Props) {
  const [selectedTalentId, setSelectedTalentId] = useState<number>(0);
  const [allTalents, setAllTalents] = useState<IAllTalent[]>([]);

  useMemo(() => {
    if (skills?.length > 0 && passiveTalents?.length > 0) {
      //add an attribute to the talent to determine if it is a passive or not to a new array with new type

      const newSkills = skills.map((skill) => {
        return {
          ...skill,
          isPassive: false,
        };
      });

      const newPassiveTalents = passiveTalents.map((passiveTalent) => {
        return {
          ...passiveTalent,
          isPassive: true,
        };
      });

      setAllTalents([...newSkills, ...newPassiveTalents]);
    }
  }, [skills, passiveTalents]);

  useMemo(() => {
    if (skills && skills.length > 0) {
      setSelectedTalentId(skills[0].id);
    }
  }, [skills]);

  return (
    <div className="w-full px-7 py-4 overflow-hidden">
      <div className="w-full flex flex-col items-start justify-center mt-8">
        <Title text="Talents" />
        <div className="w-full flex items-center justify-start space-x-8 mt-8 mb-6">
          {/* merge skills and passive talents to a one array and map. Filter out talents without name  */}
          {allTalents &&
            allTalents
              .filter((skill) => skill.name !== "")
              .map((skill) => (
                <TalentIcon
                  talent={skill}
                  key={skill.id}
                  selectedTalentId={selectedTalentId}
                  setSelectedTalentId={setSelectedTalentId}
                  element={element?.name}
                />
              ))}
        </div>
      </div>
      <CharacterTalentDetails
        selectedTalent={allTalents?.find(
          (skill) => skill.id === selectedTalentId
        )}
      />
    </div>
  );
}
