type Props = {
  label: string;
  classNames?: any;
};

export default function TextLabel({ label, classNames }: Props) {
  return (
    <label
      className={`dark:font-semibold font-bold text-base text-black dark:text-[#c4c4c4] xl:text-white xl:dark:text-white xl:text-sm leading-4 ${classNames}`}
    >
      {label}
    </label>
  );
}
