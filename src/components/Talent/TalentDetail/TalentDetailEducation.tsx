import CardOne from "@/components/common/Cards/CardOne";
import { RefObject } from "@/components/common/CustomDialog";
import DialogAddEducation from "@/components/dialogs/DialogAddEducation";
import { AddIcon } from "@/utils/icons";
import Image from "next/image";
import React, { useRef } from "react";

const EducationCard = () => {
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
          <h4 className="text-black font-bold">
            Pontificia Universidad Católica del Perú
          </h4>
          <p className="text-sm text-gray-500 space-x-2">
            <span>Bachiller en Ingeniería de sistemas</span>
            <span>2015 - 2021</span>
          </p>
        </div>
      </div>
    </CardOne>
  );
};

const TalentDetailEducation = () => {
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
      <h2 className="text-gray-500 font-bold text-sm">Educación</h2>
      <div className="flex  flex-wrap items-center space-y-2">
        <EducationCard />
        <EducationCard />
        <EducationCard />
        <EducationCard />
        <EducationCard />
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

export default TalentDetailEducation;
