import LogoHolder from "@/components/Common/LogoHolder";
import SocialIcon from "@/components/Common/SocialIcon";

type Props = {
  socials: {
    name: string;
    link: string;
    icon: string;
  }[];
};

export default function InfoContainer({ socials }: Props) {
  return (
    <div className="w-full mb-2 p-2 lg:flex lg:items-center lg:justify-start lg:space-x-4 ">
      <LogoHolder size={100} />
      <div className="w-full flex flex-col items-center lg:items-start mt-2 justify-start space-x-2">
        <p className="text-sm text-slate-400 text-center xl:text-base p-2">
          Connect with us
        </p>
        <div className="w-full flex lg:flex-col xl:flex-row lg:items-start items-center justify-center lg:justify-start">
          {socials.map((social) => (
            <SocialIcon
              key={social.name}
              name={social.name}
              url={social.link}
              icon={social.icon}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
