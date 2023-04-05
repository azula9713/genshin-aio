import Description from "./Description";

type Props = {
  name: string;
  title: string;
  description: string;
};

export default function CharacterProfile({ name, title, description }: Props) {
  return (
    <div className="w-full flex flex-col items-start justify-center">
      <h2 className="font-algoindeEnka xl:text-5xl 2xl:text-8xl">{name}</h2>
      <h4 className="uppercase font-semibold text-3xl italic tracking-widest mt-6 font-algoindeEnka drop-shadow-xl">
        {title}
      </h4>
      {/* description */}
      <Description description={description} />
    </div>
  );
}
