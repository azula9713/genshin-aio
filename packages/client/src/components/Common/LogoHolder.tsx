import Lottie from "react-lottie";
import { useNavigate } from "react-router-dom";

import * as genshinLogo from "../../assets/genshin-logo.json";

type Props = {
  size?: number;
  className?: string;
};

export default function LogoHolder({ size = 50, className }: Props) {
  const navigate = useNavigate();

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: genshinLogo,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className={className}
      onClick={() => {
        if (window.location.pathname === "/") {
          scrollToTop();
        } else {
          navigate("/");
        }
      }}
    >
      <Lottie
        options={defaultOptions}
        isClickToPauseDisabled
        height={size}
        width={size}
      />
    </div>
  );
}
