import React from "react";

type Props = {
  text: string;
  customClass?: string;
};

export default function Title({
  text,
  customClass = "font-algoindeEnka text-6xl",
}: Props) {
  return <h4 className={customClass}>{text}</h4>;
}
