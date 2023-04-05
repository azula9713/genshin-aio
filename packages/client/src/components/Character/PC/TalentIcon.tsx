import { ITalent } from "../../../interfaces/CharacterInterface";
import elementalColorPicker from "../../../static/ElementalColorPicker";

type Props = {
  talent: ITalent;
  selectedTalentId: number;
  element: string;
  setSelectedTalentId: (id: number) => void;
};

export default function TalentIcon({
  talent,
  selectedTalentId,
  element,
  setSelectedTalentId,
}: Props) {
  const handleClick = () => {
    setSelectedTalentId(talent.id);
  };

  return (
    <div
      className="w-max flex items-center justify-start"
      onClick={handleClick}
    >
      {/* cover the image from a circle */}
      <div
        className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center bg-opacity-10"
        style={{
          backgroundColor:
            selectedTalentId === talent.id
              ? elementalColorPicker(element)
              : "rgb(30 41 59)",
        }}
      >
        <img
          src={talent.icon}
          alt={talent.name}
          width={60}
          style={{
            filter:
              selectedTalentId === talent.id
                ? "brightness(1)"
                : "brightness(0.5)",
          }}
        />
      </div>
    </div>
  );
}
