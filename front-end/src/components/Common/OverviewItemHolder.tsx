import TextLabel from "./TextLabel";
import TextValue from "./TextValue";

type Props = {
  label: string;
  value: string;
  children?: JSX.Element[] | JSX.Element;
};

export default function OverviewItemHolder({ children, label, value }: Props) {
  return (
    <div className="w-full">
      <TextLabel label={label} />
      <div
        className="flex justify-start items-center"
        style={{
          marginTop: "-6px",
        }}
      >
        {children}
        <TextValue text={value} />
      </div>
    </div>
  );
}
