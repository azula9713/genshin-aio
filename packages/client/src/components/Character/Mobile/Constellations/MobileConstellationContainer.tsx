import { IConstellation } from "@/interfaces/CharacterInterface";
import DataItemCard from "../DataItemCard";

type Props = {
  constellations: IConstellation[];
  constellation: string;
  chapterIcon: string;
};

export default function MobileConstellationContainer({
  constellations,
  constellation,
  chapterIcon,
}: Props) {
  return (
    <div className="mt-2 bg-slate-200 dark:bg-slate-800 flex flex-col lg:flex-row lg:space-x-3 items-start justify-center p-4 rounded-lg shadow-md mb-2 w-full">
      <div className="w-full mt-3">
        <p className="font-bold text-sm text-slate-400 uppercase">
          {constellation}
        </p>

        <div className="w-full flex items-center justify-center">
          <img src={chapterIcon} alt={constellation} className="h-48 w-48" />
        </div>
        <div className="w-full flex flex-col items-start justify-center">
          {constellations.map((con, i) => (
            <DataItemCard item={con} key={con.id} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
