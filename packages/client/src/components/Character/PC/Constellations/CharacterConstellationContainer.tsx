import Title from "@/components/Common/Typography/Title";
import React from "react";

type Props = {
  consName: any;
};

export default function CharacterConstellationContainer({ consName }: Props) {
  const consArr = [1, 2, 3, 4, 5, 6];

  return (
    <div className="w-full px-7 py-4 overflow-hidden ">
      <div className="w-full flex flex-col items-start justify-center mt-8">
        <Title text="Constellations" />
      </div>
      <div className="w-full flex items-start justify-between mt-12">
        <div className="w-1/2 flex flex-col items-center justify-start pb-80">
          <h6 className="font-algoindeEnka text-3xl">{consName}</h6>
          <div className="mt-80 min-h-max flex items-center justify-center">
            {consArr.map((_, i) => (
              <div
                key={i}
                className="absolute w-20 h-20 rounded-full bg-gray-100 border-2 border-red-500 cursor-pointer"
                style={{
                  transform: `rotate(${i * 60}deg) translate(0, 240px)`,
                }}
              >
                <img src="" alt="" />
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-start">
          Details
        </div>
      </div>
    </div>
  );
}
