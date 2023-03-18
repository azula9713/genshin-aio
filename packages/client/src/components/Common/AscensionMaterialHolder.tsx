import { useEffect, useState } from "react";
import { useQuery } from "react-query";

import { IMaterialData } from "../../interfaces/MaterialInterface";
import { fetchEnkaMaterialById } from "../../services/enka/materials";
import TextLabel from "./TextLabel";
import TextValue from "./TextValue";

type Props = {
  id: string;
  value: string;
  children?: JSX.Element[] | JSX.Element;
  index?: number;
};

export default function AscensionMaterialHolder({
  children,
  id,
  value,
  index,
}: Props) {
  const { isError, data } = useQuery(["fetchEnkkaCharacterData", id], () =>
    fetchEnkaMaterialById(id)
  );

  const [materialData, setMaterialData] = useState<IMaterialData>(
    {} as IMaterialData
  );

  useEffect(() => {
    setMaterialData(data);

    // return () => {
    //   setMaterialData({} as IMaterialData);
    // };
  }, [data]);

  if (isError) {
    return <div>Error</div>;
  }

  if (materialData && materialData.name) {
    return (
      <div className="w-full flex items-center justify-start space-x-3 my-1 bg-gray-800 rounded-md px-2 h-10">
        <TextLabel label={materialData.name} classNames="w-full" />
        <div
          className="flex justify-end items-center pt-1 w-1/4"
          style={{
            marginTop: "-6px",
          }}
        >
          <img
            src={materialData.icon}
            alt={materialData.name}
            width={40}
            style={{
              maxWidth: `${index === 0 ? "90%" : "100%"}`,
            }}
          />
          <div className="text-[12px] md:text-[15px] mr-1">x </div>
          <TextValue text={value} />
        </div>
      </div>
    );
  }

  return null;
}
