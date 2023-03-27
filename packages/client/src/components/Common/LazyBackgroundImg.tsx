import React, { useState } from "react";

type Props = {
  img: string;
  children?: JSX.Element[] | JSX.Element;
  className?: string;
  style?: React.CSSProperties;
};

export default function LazyBackgroundImg({
  img,
  children,
  className,
  style,
}: Props) {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    setLoaded(true);
  };

  console.log("img", img);

  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        filter: loaded ? "none" : "blur(20px)",
        transition: "filter 0.5s",
        ...style,
      }}
    >
      {!loaded && <div style={{ visibility: "hidden" }}>{children}</div>}
      <img src={img} alt="" onLoad={handleLoad} style={{ display: "none" }} />
      {loaded && children}
    </div>
  );
}
