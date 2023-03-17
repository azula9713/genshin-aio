type Props = {
  label: string;
  classNames?: any;
};

export default function TextLabel({ label, classNames }: Props) {
  return (
    <label className={`font-semibold text-xs text-gray-300` + ` ${classNames}`}>
      {label}
    </label>
  );
}
