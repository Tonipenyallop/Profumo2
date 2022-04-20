import React from "react";
import { GiFallingLeaf } from "react-icons/gi";
import { FaUmbrellaBeach, FaSnowflake, FaMoon } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { WiDaySunny } from "react-icons/wi";
import Icon from "../../Icon";

export default function SeasonData({ season, seasonName }: any) {
  function arrayMaker(): Array<number> {
    return new Array(season).fill("a");
  }

  let icon: any;
  if (seasonName === "spring") icon = <SiSpring size="24" />;
  else if (seasonName === "summer") icon = <FaUmbrellaBeach size="24" />;
  else if (seasonName === "fall") icon = <GiFallingLeaf size="24" />;
  else if (seasonName === "winter") icon = <FaSnowflake size="24" />;
  else if (seasonName === "day") icon = <WiDaySunny size="24" />;
  else icon = <FaMoon size="24" />;

  let color = "";
  if (seasonName === "spring") color = "bg-green-400";
  else if (seasonName === "summer") color = "bg-red-300";
  else if (seasonName === "fall") color = "bg-yellow-600";
  else if (seasonName === "winter") color = "bg-blue-300";
  else if (seasonName === "day") color = "bg-yellow-400";
  else color = "bg-blue-600";

  return (
    <div className={`seasons`}>
      <div className="flex justify-start ">
        {arrayMaker().map((e: any, idx: number) => {
          return (
            <div className={`${color}`} key={`${idx}`}>
              <Icon icon={icon} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
