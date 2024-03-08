import React from "react";
import { ModeToggle } from "./mode-toggle";
import { IoSearch } from "react-icons/io5";

const Nav = () => {
  return (
    <div>
      <div className=" w-full  h-[25px] bg-primary flex items-center justify justify-between px-[2%] text-white">
        <div className="font-bold flex items-center text-lg">devBuds</div>
        <div>
          <IoSearch color="" />
        </div>
        <button></button>
        <button></button>
      </div>
      <ModeToggle />
    </div>
  );
};

export default Nav;
