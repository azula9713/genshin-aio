type Props = {
  text: string;
};

export default function TextValue({ text }: Props) {
  return <p className="text-gray-800 dark:text-white font-bold">{text}</p>;
}
