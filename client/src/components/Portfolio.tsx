import React from "react";
import { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { HiOutlinePaintBrush } from "react-icons/hi2";
import { HiPencil } from "react-icons/hi2";
import { useState } from "react";
import { FaCheck } from "react-icons/fa6";

interface PortofolioProps {
  variant: string;
  title?: string;
  bgColor?: string;
  domain?: string;
  link?: string;
  icon?: IconType;
}

const Portfolio = ({
  variant,
  title,
  bgColor,
  domain,
  link,
  icon: Icon,
}: PortofolioProps) => {
  switch (variant) {
    case "github":
      title = "Github";
      domain = "https://github.com/";
      bgColor = "bg-[black]";
      Icon = FaGithub;

      break;
    case "linkedin":
      title = "LinkedIn";
      domain = "https://linkedin.com/in/";
      bgColor = "bg-[#0274B3]";
      Icon = FaLinkedin;
      break;
    case "personal":
      title = "Personal Website";
      domain = "https://";
      Icon = HiOutlinePaintBrush;
      bgColor = "bg-primary";
      break;
  }

  const [userLink, setLink] = useState("");
  const [input, setInput] = useState("");
  const [showInput, setShowInput] = useState(false);
  const [showEdit, setShowEdit] = useState(true);

  const handleLinkChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLink(input);
    setShowInput(false);
    setShowEdit(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="w-full flex flex-col ">
      <div className="flex items-center gap-4 h-[80px] mb-4 text-black ">
        <div
          className={`h-full rounded-[8px] w-[80px] drop-shad ${bgColor} flex justify-center items-center`}
        >
          {Icon && <Icon fontSize={"50px"} color="white" />}
        </div>
        <div className="flex flex-col  ">
          <span className="font-extrabold text-lg text-2">{title}</span>

          <span className="flex items-center gap-2">
            <span>
              <a
                href={domain + userLink}
                target="_blank"
                className="hover:text-primary"
              >
                {domain}
                {showEdit && <span>{userLink}</span>}
              </a>
            </span>

            {showInput && (
              <form className="flex gap-2">
                <input
                  type="text"
                  className="outline outline-[#afafaf] outline-1 rounded-md pl-2"
                  placeholder="johndoe"
                  value={input}
                  onChange={handleInputChange}
                />
                <button
                  type="submit"
                  onClick={handleLinkChange}
                  className="hover:text-primary"
                >
                  <FaCheck />
                </button>
              </form>
            )}

            {showEdit && (
              <button
                onClick={() => {
                  setShowInput(true);
                  setShowEdit(false);
                }}
                className="hover:text-primary"
              >
                <HiPencil color="#7B7B7B" />
              </button>
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
