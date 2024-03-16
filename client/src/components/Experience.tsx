import React from "react";

interface ExperienceProps {
  companyLogo: string;
  companyTitle: string;
  companyName: string;
  companyLocation: string;
  startDate: string;
  endDate: string;
  description: string;
}
const Experience = ({
  companyLogo,
  companyTitle,
  companyName,
  companyLocation,
  startDate,
  endDate,
  description,
}: ExperienceProps) => {
  return (
    <div className=" w-full flex flex-col bg-white">
      <div className="flex gap-4 h-[80px] mb-4 text-black">
        <img
          src={companyLogo}
          alt=""
          className="h-full rounded-[8px] drop-shad"
        />
        <div className="flex flex-col h-full">
          <span className="font-extrabold text-lg text-2">{companyTitle}</span>
          <span className="mb-[5px]">
            <span className="">{companyName}</span>
            <span> • </span>
            <span>{companyLocation}</span>
          </span>
          <span>
            <span className="text-gray-500 text-sm">{startDate}</span>
            <span> - </span>
            <span className="text-gray-500 text-sm">{endDate}</span>
          </span>
        </div>
      </div>
      <div>
        <p className="text-black">{description}</p>
      </div>
    </div>

    /* Rectangle 40 */
    /**
position: absolute;
width: 965px;
height: 2656px;
left: 394px;
top: 156px;

background: #EDEDED;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 23px;
 */
  );
};

export default Experience;
