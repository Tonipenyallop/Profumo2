import React from "react";
import { AiOutlineStar } from "react-icons/ai";

import Icon from "../../Icon";

export default function Stars({ number }: any) {
  function arrayMaker(): Array<number> {
    return new Array(number).fill(0);
  }
  return (
    <div className="flex text-white">
      {arrayMaker().map((e: number) => {
        return <Icon icon={<AiOutlineStar size="24" />} />;
      })}
    </div>
  );
}
