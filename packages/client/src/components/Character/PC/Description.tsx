type Props = {
  description: string;
};

export default function Description({ description }: Props) {
  return (
    <p className="mt-6 text-xl 2xl:text-2xl font-semibold leading-8 tracking-wide text-white w-2/3 italic">
      "
      {description?.split(" ").length > 100 ? (
        <span>
          {description?.split(" ").slice(0, 100).join(" ")}...
          <span className="text-blue-500">Read More</span>
        </span>
      ) : (
        description
      )}
      "
    </p>
  );
}
