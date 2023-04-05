import { ITalent } from "../../../interfaces/CharacterInterface";

type Props = {
  talent: ITalent;
  selectedTalentId: number;
  setSelectedTalentId: (id: number) => void;
};

export default function TalentIcon({
  talent,
  selectedTalentId,
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
      <img src={talent.icon} alt={talent.name} width={60} />
    </div>
  );
}
