import React from "react";

type Props = {
  name: string;
  url: string;
  icon: JSX.Element;
};

export default function SocialIcon({ name, url, icon }: Props) {
  return <div className="border-2 mx-1 p-1">{icon}</div>;
}
