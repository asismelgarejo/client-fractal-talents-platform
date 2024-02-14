import CardOne from "@/components/common/Cards/CardOne";
import { RefObject } from "@/components/common/CustomDialog";
import DialogAddExperience from "@/components/dialogs/DialogAddExperience";
import { AddIcon } from "@/utils/icons";
import Image from "next/image";
import React, { useRef } from "react";

const ExperienceCard = () => {
  return (
    <CardOne className="py-4">
      <div className="flex space-x-2">
        <Image
          src="/assets/fractal_co.png"
          alt="fractal"
          width={48}
          height={48}
        />
        <div>
          <h4 className="text-black font-bold">FRACTAL</h4>
          <p className="text-sm text-gray-500 space-x-2">
            <span>Desarrollador Full-Stack</span>
            <span>2015 - 2021</span>
            <span>6 años</span>
          </p>
        </div>
      </div>
    </CardOne>
  );
};

const TalentDetailExperience = () => {
  const refExperience = useRef<RefObject>(null);

  return (
    <div className="space-y-2 relative">
      <button
        type="button"
        className="absolute right-0 top-0 p-1"
        onClick={() => refExperience.current?.showDialog()}
      >
        <AddIcon className="text-[12px] fill-gray-400" />
      </button>
      <h2 className="text-gray-500 font-bold text-sm">Experiencia</h2>
      <div className="flex space-x-1 flex-wrap items-center gap-2">
        <ExperienceCard />
      </div>
      <DialogAddExperience
        ref={refExperience}
        closeModal={() => {
          refExperience.current && refExperience.current.showDialog();
        }}
      />
    </div>
  );
};

export default TalentDetailExperience;
