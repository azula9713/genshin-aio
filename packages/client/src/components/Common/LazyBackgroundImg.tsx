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
  return (
    <div
      className={className}
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        backgroundSize: "cover",
        ...style,
      }}
    >
      {children}
    </div>
  );
}
