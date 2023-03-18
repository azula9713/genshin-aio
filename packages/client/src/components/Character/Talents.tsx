import { ITalent } from "../../interfaces/CharacterInterface";
import TalentCard from "./TalentCard";

type Props = {
  skills: ITalent[];
  passiveTalents: ITalent[];
};

export default function Talents({ skills, passiveTalents }: Props) {
  console.log(skills);
  return (
    <div className="mt-2 bg-slate-600 flex flex-col lg:flex-row lg:space-x-3 items-start justify-center p-4 rounded-lg shadow-md mb-2 w-full">
      <div className="w-full">
        Character Skills
        <div className="w-full flex flex-col items-start justify-center">
          {skills.map((skill) => (
            <TalentCard talent={skill} key={skill.id} />
          ))}
        </div>
      </div>
      <div className="w-full">
        Passive Talents
        <div className="w-full flex flex-col items-start justify-center">
          {passiveTalents.map((passivetalent) => (
            <TalentCard talent={passivetalent} key={passivetalent.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
