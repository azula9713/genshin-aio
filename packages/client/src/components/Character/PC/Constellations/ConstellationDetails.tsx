import parseText from "@/functions/ParseEnkaText";
import { IConstellation } from "@/interfaces/CharacterInterface";

type Props = {
  selectedConstellation: IConstellation;
};

export default function ConstellationDetails({ selectedConstellation }: Props) {
  if (!selectedConstellation) return null;

  return (
    <div className="w-full flex flex-col items-start justify-start rounded-lg bg-slate-700 min-h-[40rem] mt-20 p-8">
      <h6 className="text-4xl px-16 font-bold">{selectedConstellation.name}</h6>
      <div
        className="mt-12 text-lg text-left px-16 w-full"
        dangerouslySetInnerHTML={{
          __html: parseText(selectedConstellation?.description),
        }}
      />

      <div className="w-full flex items-center justify-center">
        <img
          src={selectedConstellation.icon}
          alt={selectedConstellation.name}
          className="w-80 h-80"
          style={{
            filter: "blur(0.5px) brightness(0.5)",
          }}
        />
      </div>
    </div>
  );
}
