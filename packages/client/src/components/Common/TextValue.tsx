type Props = {
  text: string;
};

export default function TextValue({ text }: Props) {
  return (
    <p className="text-gray-800 dark:text-slate-300 font-semibold leading-4">
      {text}
    </p>
  );
}
