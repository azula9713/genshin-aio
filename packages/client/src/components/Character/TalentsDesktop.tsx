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
      <h5 className="uppercase font-semibold tracking-wide font-algoindeEnka text-lg">
        {title}
      </h5>
      <div className="w-full flex items-start justify-between space-x-2 mt-2">
        {talents &&
          filteredTalents.map((talent) => (
            <TalentDesktopCard talent={talent} key={talent.id} />
          ))}
      </div>
    </div>
  );
}
