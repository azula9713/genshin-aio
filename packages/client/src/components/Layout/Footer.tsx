import LogoHolder from "../Common/LogoHolder";
import SocialIcon from "../Common/SocialIcon";

import socials from "../../static/Social";

export default function Footer() {
  return (
    <footer className="w-full p-2">
      <div className="w-full p-2">
        <div className="w-full mb-2 p-2">
          <LogoHolder />
          <div className="w-full flex flex-col items-center mt-2">
            <p className="text-sm text-slate-400 text-center">
              Connect with us
            </p>
            <div className="w-full flex items-center justify-evenly">
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
        <div>
          <div className="text-slate-400 text-xs font-algoindeEnka text-center py-1">{`© ${new Date().getFullYear()} Genshin AIO`}</div>
        </div>
      </div>
    </footer>
  );
}
