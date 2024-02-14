import { EditIcon } from "@/utils/icons";
import React from "react";

const TalentDetailDescription = () => {
  return (
    <div className="relative">
      <p className="text-sm">
        Hello! This is Juan Lopez speaking, I`&apos;`m a Full-Stack Developer
        specializing in Front-End Technologies and also a student at Holberton
        School.
      <button className="p-1 rounded-full  b-0" type="button">
        <EditIcon className="fill-gray-500 text-md" />
      </button>
      </p>
    </div>
  );
};

export default TalentDetailDescription;
