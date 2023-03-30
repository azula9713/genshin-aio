import { ITalent } from "../../interfaces/CharacterInterface";
import TalentDesktopCard from "./TalentDesktopCard";

type Props = {
  title: string;
  talents: ITalent[];
};

export default function TalentsDesktop({ title, talents }: Props) {
  const filteredTalents = talents?.filter((talent) => talent.name !== "");

  return (
    <div className="mb-4">
      <div>{title}</div>
      <div className="w-full flex items-start justify-between space-x-2 mt-2">
        {talents &&
          filteredTalents.map((talent) => (
            <TalentDesktopCard talent={talent} key={talent.id} />
          ))}
      </div>
    </div>
  );
}
