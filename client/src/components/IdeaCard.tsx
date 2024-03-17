import Avatar from "./Avatar";
import Button from "./Button";
import Badge from "./badge";
import { BsBookmark } from "react-icons/bs";
import { useState } from "react";

interface Author {
  firstName: string;
  lastName: string;
  src: string;
}

interface CardProps {
  title: string;
  description: string;
  college?: string;
  major?: string;
  created?: string;
  author: Author;
  badges: string[];
  width?: number;
  imageSrc?: string;
  onClick?: () => void;
}

const ProjectCard: React.FC<CardProps> = ({
  title,
  description,
  college,
  major,
  created,
  author,
  badges,
  width = 500,
  imageSrc,
  onClick,
}) => {
  const [bookmarked, setBookmarked] = useState<boolean>(false);

  const handleBookmarkBtnOnClick = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div
      className={`flex flex-col border border-black  rounded-lg`}
      style={{
        width: width,
      }}
    >
      <div className="p-5">
        {/* Card Header */}
        <div className="flex flex-col">
          <div className="flex flex-row gap-3 ">
            <div>
              <Avatar
                firstName={author.firstName}
                lastName={author.lastName}
                src={author.src}
                size={80}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="text-lg font-semibold">
                {author.firstName} {author.lastName}
              </h2>
              <h3 className="text-sm font-medium">
                {college} | {major}
              </h3>
              <span className="text-sm font-light text-slate-500">
                {created}
              </span>
            </div>
          </div>
          <div className="flex flex-row gap-5 py-3 ">
            {badges?.slice(0, 4).map((badge, i) => {
              return (
                <Badge
                  key={i}
                  label={badge}
                  size="medium"
                  className="!shadow-md !bg-gray-300 !text-black"
                />
              );
            })}
            {badges?.slice(4).length > 0 && (
              <span className="text-small font-light text-slate-500">
                + {badges?.slice(4).length}
              </span>
            )}
          </div>
        </div>
        <hr className="border border-gray-300 mt-3" />
      </div>
      {/* Card Body */}
      <div className="px-5">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="py-2">{description}</p>
        {imageSrc && (
          <div className="py-2">
            <img src={imageSrc} alt="project-preview" className="rounded-md" />
          </div>
        )}
        <div className="flex flex-row py-3 gap-2">
          <Button variant="primary" className="w-full" onClick={onClick}>
            Apply
          </Button>
          <Button
            variant="secondary"
            onClick={handleBookmarkBtnOnClick}
            className={bookmarked ? "bg-yellow-400" : ""}
          >
            <BsBookmark />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
