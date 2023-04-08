import TextLabel from "./Typography/TextLabel";
import TextValue from "./Typography/TextValue";

type Props = {
  label: string;
  value: string;
  children?: JSX.Element[] | JSX.Element;
};

export default function OverviewItemHolder({ children, label, value }: Props) {
  return (
    <div className="w-1/3 flex flex-col justify-between mx-1">
      <div className=" xl:py-1 xl:px-2 xl:rounded-md relative my-1">
        <TextLabel label={label} classNames="uppercase" />
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
