import { LinkIcon } from "@heroicons/react/24/solid";

import { ITalent } from "../../interfaces/CharacterInterface";
import TextLabel from "../Common/Typography/TextLabel";

type Props = {
  talent: ITalent;
};

export default function TalentDesktopCard({ talent }: Props) {
  return (
    <div className="w-full p-2 rounded-md xl:bg-slate-900 xl:bg-opacity-50 cursor-pointer hover:bg-slate-700 hover:bg-opacity-50 transition ease-in-out duration-300">
      <div className="w-full flex items-center justify-between space-x-3">
        <img src={talent.icon} alt={talent.name} width={60} />
        <TextLabel
          label={talent.name}
          classNames="text-black dark:text-white "
        />
        <div className="w-1/5 mx-2 flex items-center justify-end">
          <LinkIcon
            className={`w-5 h-5 transform transition ease-in-out duration-300`}
          />
        </div>
      </div>
    </div>
  );
}
