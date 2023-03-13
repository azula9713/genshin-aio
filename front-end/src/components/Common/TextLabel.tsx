type Props = {
  label: string;
};

export default function TextLabel({ label }: Props) {
  return <label className="font-semibold text-xs text-gray-300">{label}</label>;
}
