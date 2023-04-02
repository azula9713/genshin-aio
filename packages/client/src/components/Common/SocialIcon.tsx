import { Link } from "react-router-dom";

type Props = {
  name: string;
  url: string;
  icon: string;
  iconSize?: number;
};

export default function SocialIcon({ name, url, icon, iconSize = 24 }: Props) {
  return (
    <Link to={url} target="_blank">
      <div className="p-1">
        <img src={icon} alt={name} width={iconSize} />
      </div>
    </Link>
  );
}
