import React from "react";
import { GiFallingLeaf } from "react-icons/gi";
import { FaUmbrellaBeach, FaSnowflake, FaMoon } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { WiDaySunny } from "react-icons/wi";
import Icon from "../../Icon";
import Stars from "./Stars";

export default function SeasonData({ seasonName, seasonNumber }: any) {
  let icon: any;
  if (seasonName === "spring") icon = <SiSpring size="24" />;
  else if (seasonName === "summer") icon = <FaUmbrellaBeach size="24" />;
  else if (seasonName === "fall") icon = <GiFallingLeaf size="24" />;
  else if (seasonName === "winter") icon = <FaSnowflake size="24" />;
  else if (seasonName === "day") icon = <WiDaySunny size="24" />;
  else icon = <FaMoon size="24" />;

  return (
    <div className={`seasons `}>
      <div className="flex justify-start ">
        <Icon icon={icon} />
      </div>
      <div className="flex flex-col  w-full">
        <Stars number={seasonNumber} />
      </div>
    </div>
  );
}
