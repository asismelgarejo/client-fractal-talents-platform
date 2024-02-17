import { RefObject } from "@/components/common/CustomDialog";
import DialogDescription from "@/components/dialogs/DialogDescription";
import { EditIcon } from "@/utils/icons";
import React, { useRef } from "react";

const TalentDetailDescription = () => {
  const refDescription = useRef<RefObject>(null);

  return (
    <div className="relative">
      <p className="text-sm">
        Hello! This is Juan Lopez speaking, I`&apos;`m a Full-Stack Developer
        specializing in Front-End Technologies and also a student at Holberton
        School.
        <button
          className="p-1 rounded-full  b-0"
          type="button"
          onClick={() => refDescription.current?.showDialog()}
        >
          <EditIcon className="fill-gray-500 text-md" />
        </button>
      </p>
      <DialogDescription
        ref={refDescription}
        closeModal={() => {
          refDescription.current && refDescription.current.showDialog();
        }}
      />
    </div>
  );
};

export default TalentDetailDescription;
