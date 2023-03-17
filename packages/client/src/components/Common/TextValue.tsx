type Props = {
  text: string;
};

export default function TextValue({ text }: Props) {
  return <p className="text-white font-bold">{text}</p>;
}
