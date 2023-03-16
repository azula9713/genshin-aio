import OverviewItemHolder from "../Common/OverviewItemHolder";

type Props = {};

export default function TalentMats({}: Props) {
  return (
    <div className="mt-2 bg-slate-600 flex flex-col items-center justify-between p-4 rounded-lg shadow-md">
      <div className="flex items-center w-full justify-between">
        <OverviewItemHolder label="Talent Book" value="Freedom">
          <img
            className="w-5 h-5 mr-2"
            src="https://paimon.moe/images/items/teachings_of_freedom.png"
            alt="freedomeBook"
          />
        </OverviewItemHolder>
        <OverviewItemHolder label="Boss Material" value="Dvalin's Sigh">
          <img
            className="w-6 h-6 mr-2"
            src="https://paimon.moe/images/items/dvalins_sigh.png"
            alt="dvalinsSigh"
          />
        </OverviewItemHolder>
      </div>
    </div>
  );
}
