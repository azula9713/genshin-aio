import { Link } from "react-router-dom";

type Props = {
  name: string;
  url: string;
  icon: string;
  iconSize?: number;
};

export default function SocialIcon({ name, url, icon, iconSize = 24 }: Props) {
  return (
    <Link to={url} target="_blank" className="w-full cursor-pointer">
      <div className="p-1 w-full flex flex-col lg:flex-row items-center lg:justify-start justify-center space-x-2">
        <img src={icon} alt={name} width={iconSize} />
        <div className="hidden lg:block hover:font-bold transition-all duration-300 hover:underline">
          {name}
        </div>
      </div>
    </Link>
  );
}
