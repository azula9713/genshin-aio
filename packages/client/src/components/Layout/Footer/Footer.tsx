import socials from "@/static/Social";
import InfoContainer from "./InfoContainer";
import FooterHelperContainer from "./FooterHelperContainer";
import FooterOtherContainer from "./FooterOtherContainer";

export default function Footer() {
  return (
    <footer className=" max-w-[2150px] w-full p-2 footer">
      <div className="w-full p-2 lg:flex lg:items-start lg:justify-center text-white h-full">
        <InfoContainer socials={socials} />
        <FooterHelperContainer />
        <FooterOtherContainer />
      </div>
      <div>
        <div className="text-slate-400 text-xs font-algoindeEnka text-center py-1">{`© ${new Date().getFullYear()} Genshin AIO`}</div>
      </div>
    </footer>
  );
}
