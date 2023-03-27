type Props = {
  text: string;
};

export default function TextValue({ text }: Props) {
  return (
    <p className="text-gray-800 dark:text-slate-300 xl:dark:text-white xl:text-sm 2xl:text-base font-semibold leading-4 xl:leading-3 2xl:leading-4">
      {text}
    </p>
  );
}
