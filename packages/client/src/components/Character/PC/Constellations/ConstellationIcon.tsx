import { IConstellation } from "@/interfaces/CharacterInterface";

type Props = {
  constellation: IConstellation;
  index: number;
  selectedConstellation: IConstellation;
  setSelectedConstellation: (constellation: IConstellation) => void;
};

export default function ConstellationIcon({
  index,
  constellation,
  selectedConstellation,
  setSelectedConstellation,
}: Props) {
  return (
    <div
      className={`absolute w-24 h-24 rounded-full cursor-pointer p-1 hover:bg-slate-700 transition-all duration-200 ${
        selectedConstellation?.id === constellation?.id
          ? "bg-slate-700"
          : "bg-slate-800"
      }`}
      style={{
        transform: `rotate(${index * 60}deg) translate(0, 240px)`,
      }}
      onClick={() => setSelectedConstellation(constellation)}
    >
      {/* add a bublle saying which constellation is is. Eg: C0 C1 C2 etc */}
      <div
        className="absolute w-8 h-8 rounded-full flex items-center justify-center bg-slate-400 text-white text-xs font-bold"
        style={{
          transform: `rotate(${-index * 60}deg)`,
        }}
      >
        <p
          style={{
            transform: `rotate(180deg)`,
          }}
        >
          C{index + 1}
        </p>
      </div>

      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          transform: `rotate(${-index * 60}deg)`,
        }}
      >
        <div
          className="flex items-center justify-center"
          style={{
            transform: "rotate(180deg)",
          }}
        >
          <img
            src={constellation.icon}
            alt={constellation.name}
            style={{
              //overlay white color to make the icon more visible
              filter: "brightness(0) invert(1)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
