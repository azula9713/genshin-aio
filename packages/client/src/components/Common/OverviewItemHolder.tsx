import TextLabel from "./TextLabel";
import TextValue from "./TextValue";

type Props = {
  label: string;
  value: string;
  children?: JSX.Element[] | JSX.Element;
};

export default function OverviewItemHolder({ children, label, value }: Props) {
  return (
    <div className="w-full flex flex-col justify-between mx-1">
      <div className=" xl:py-1 xl:px-2 xl:rounded-md relative xl:bg-slate-400 xl:bg-opacity-50">
        <TextLabel label={label} />
        <div
          className="flex justify-start items-center pt-1"
          style={{
            marginTop: "-2px",
          }}
        >
          {children}
          <TextValue text={value} />
        </div>
      </div>
    </div>
  );
}
