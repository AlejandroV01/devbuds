import React from "react";
import Experience from "@/components/Experience";

import { HiPencil } from "react-icons/hi2";

const ExperienceCard = () => {
  return (
    <div className="w-[850px] py-5 px-5 pt-4 flex flex-col gap-7 rounded-[8px] drop-shad bg-[#E8E8E8]">
      <div className="flex justify-between items-center">
        <span className="font-extrabold text-2xl text-black">
          Work Experience
        </span>
        <HiPencil color="#7B7B7B" fontSize="18px" />
      </div>
      <div className="flex flex-col gap-7">
        <Experience
          companyLogo="https://media.licdn.com/dms/image/D4E0BAQHcyC1UQRfsWQ/company-logo_200_200/0/1707366094747/initofficial_logo?e=2147483647&v=beta&t=7y8ERn_Rj7oXfdxCkujsEj5L2dEe30EBx7ex2Mt5eYs"
          companyTitle="Software Engineer"
          companyName="Init"
          companyLocation="Miami,FL"
          startDate="May 2024"
          endDate="August 2024"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore quae vel, nobis corporis est placeat nulla, voluptate provident rerum, doloribus porro consequuntur unde harum natus! Odit voluptatum vitae facilis iste voluptate nobis doloribus accusamus minima? Non cum a repudiandae similique asperiores unde nobis maxime mollitia, aperiam perspiciatis. Aliquid, magni."
        />
        <Experience
          companyLogo="https://media.licdn.com/dms/image/D4E0BAQHcyC1UQRfsWQ/company-logo_200_200/0/1707366094747/initofficial_logo?e=2147483647&v=beta&t=7y8ERn_Rj7oXfdxCkujsEj5L2dEe30EBx7ex2Mt5eYs"
          companyTitle="Software Engineer"
          companyName="Init"
          companyLocation="Miami,FL"
          startDate="May 2024"
          endDate="August 2024"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque dolore quae vel, nobis corporis est placeat nulla, voluptate provident rerum, doloribus porro consequuntur unde harum natus! Odit voluptatum vitae facilis iste voluptate nobis doloribus accusamus minima? Non cum a repudiandae similique asperiores unde nobis maxime mollitia, aperiam perspiciatis. Aliquid, magni."
        />
      </div>
    </div>
  );
};

export default ExperienceCard;
