import { RefObject } from "@/components/common/CustomDialog";
import DialogDescription from "@/components/dialogs/DialogDescription";
import { IRootState } from "@/store";
import { EditIcon } from "@/utils/icons";
import React, { useRef } from "react";
import { useSelector } from "react-redux";

const TalentDetailDescription = () => {
  const refDescription = useRef<RefObject>(null);
  const { user: userData, talent: talentData } = useSelector(
    (root: IRootState) => root
  );
  return (
    <div className="relative">
      <p className="text-sm">
        {talentData.description}
        {userData && (
          <button
            className="p-1 rounded-full  b-0"
            type="button"
            onClick={() => refDescription.current?.showDialog()}
          >
            <EditIcon className="fill-gray-500 text-md" />
          </button>
        )}
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
