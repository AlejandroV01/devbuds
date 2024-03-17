import React from "react";
import Portfolio from "@/components/Portfolio";

const PortfolioCard = () => {
  return (
    <div className="w-[850px] py-5 px-5 pt-4 flex flex-col gap-7 rounded-[8px] drop-shad bg-[#E8E8E8]">
      <div className="flex justify-between items-center">
        <span className="font-extrabold text-2xl text-black">Portfolio</span>
      </div>
      <div className="flex flex-col gap-7">
        <Portfolio variant="github" />
        <Portfolio variant="linkedin" />
        <Portfolio variant="personal" />
      </div>
    </div>
  );
};

export default PortfolioCard;
