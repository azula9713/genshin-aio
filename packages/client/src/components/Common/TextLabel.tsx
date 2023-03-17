type Props = {
  label: string;
  classNames?: any;
};

export default function TextLabel({ label, classNames }: Props) {
  return (
    <label
      className={`font-semibold text-base text-gray-300 leading-4 ${classNames}`}
    >
      {label}
    </label>
  );
}
