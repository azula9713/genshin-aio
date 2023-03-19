type Props = {
  label: string;
  classNames?: any;
};

export default function TextLabel({ label, classNames }: Props) {
  return (
    <label
      className={`dark:font-semibold font-bold text-base text-black dark:text-gray-300 xl:text-white xl:dark:text-white xl:text-sm leading-4 ${classNames}`}
    >
      {label}
    </label>
  );
}
