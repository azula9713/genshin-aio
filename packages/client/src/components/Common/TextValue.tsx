type Props = {
  text: string;
};

export default function TextValue({ text }: Props) {
  return (
    <p className="text-white text-[12px] md:text-[15px] font-bold">{text}</p>
  );
}
