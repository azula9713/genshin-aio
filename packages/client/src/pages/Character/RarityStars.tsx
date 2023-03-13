import { StarIcon } from "@heroicons/react/24/solid";

type Props = {
  stars: number;
};

function RarityStars({ stars }: Props) {
  return (
    <div className="flex w-full justify-start items-center">
      {Array(stars)
        .fill("")
        .map((_, i) => (
          <StarIcon className="h-3 w-3 text-[gold]" key={i} />
        ))}
    </div>
  );
}

export default RarityStars;
