import LogoHolder from "../Common/LogoHolder";
import SocialIcon from "../Common/SocialIcon";

import socials from "../../static/Social";

export default function Footer() {
  return (
    <footer className="w-full p-2 footer">
      <div className="w-full p-2 lg:flex lg:items-start lg:justify-center text-white">
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
        <div className="w-full border-green-500 border-2 mb-2 p-2">Helpers</div>
        <div className="w-full border-blue-500 border-2 mb-2 p-2">Others</div>
      </div>
      <div>
        <div className="text-slate-400 text-xs font-algoindeEnka text-center py-1">{`© ${new Date().getFullYear()} Genshin AIO`}</div>
      </div>
    </footer>
  );
}
