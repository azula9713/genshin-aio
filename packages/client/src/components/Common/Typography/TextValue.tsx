type Props = {
  text: string;
};

export default function TextValue({ text }: Props) {
  return (
    <p className="text-slate-300 xl:text-white xl:text-xl font-semibold leading-4 xl:leading-5">
      {text}
    </p>
  );
}
