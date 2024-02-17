import CardOne from "@/components/common/Cards/CardOne";
import CustomButton from "@/components/common/CustomButton";
import { RefObject } from "@/components/common/CustomDialog";
import CustomRating from "@/components/common/CustomRating";
import DialogAddEducation from "@/components/dialogs/DialogAddEducation";
import { AddIcon, PlusIcon } from "@/utils/icons";
import Image from "next/image";
import React, { useRef } from "react";

const FeedbackCard = () => {
  return (
    <CardOne className="py-4">
      <div className="flex space-x-2">
        <Image
          src="/assets/fractal_co.png"
          alt="fractal"
          width={"48"}
          height={"48"}
          style={
            {
              // width: "auto",
              // height: "auto",
            }
          }
        />
        <div>
          <div className="flex space-x-10 items-center">
            <h4 className="text-black font-bold">Cesar Ortiz</h4>
            <CustomRating className="text-sm" />
          </div>
          <p className="text-sm text-gray-500 space-x-2">
            Ayudó siempre al equipo, es muy talentoso.
          </p>
        </div>
      </div>
    </CardOne>
  );
};

const TalentDetailFeedback = () => {
  const refEducation = useRef<RefObject>(null);

  return (
    <div className="space-y-2 relative">
      <button
        type="button"
        className="absolute right-0 top-0 p-1"
        onClick={() => refEducation.current?.showDialog()}
      >
        <AddIcon className="text-[12px] fill-gray-400" />
      </button>
      <h2 className="text-gray-500 font-bold text-sm">Feedback</h2>
      <div className="flex  flex-wrap items-center space-y-2">
        <FeedbackCard />
        <FeedbackCard />
        <CustomButton className="w-full !justify-start" variant="text" startIcon={<PlusIcon />}>
          Dar nuevo feedback
        </CustomButton>
      </div>
      <DialogAddEducation
        ref={refEducation}
        closeModal={() => {
          refEducation.current && refEducation.current.showDialog();
        }}
      />
    </div>
  );
};

export default TalentDetailFeedback;
