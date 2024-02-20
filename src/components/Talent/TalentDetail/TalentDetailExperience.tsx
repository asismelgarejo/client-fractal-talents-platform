import CardOne from "@/components/common/Cards/CardOne";
import { RefObject } from "@/components/common/CustomDialog";
import DialogAddExperience from "@/components/dialogs/DialogAddExperience";
import { IRootState } from "@/store";
import { AddIcon, EditIcon } from "@/utils/icons";
import Image from "next/image";
import React, { useRef } from "react";
import { useSelector } from "react-redux";

const ExperienceCard = () => {
  const refExperience = useRef<RefObject>(null);
  const userData = useSelector((root: IRootState) => root.user);

  return (
    <>
      <CardOne className="py-4">
        <div className="flex space-x-2">
          <Image
            src="/assets/fractal_co.png"
            alt="fractal"
            width={48}
            height={48}
            style={
              {
                // width: "auto",
                // height: "auto",
              }
            }
          />
          <div>
            <h4 className="text-black font-bold">FRACTAL</h4>
            <p className="text-sm text-gray-500 space-x-2">
              <span>Desarrollador Full-Stack</span>
              <span>2015 - 2021</span>
              <span>6 años</span>
            </p>
          </div>
          {userData && (
            <div
              className="flex items-center ml-auto"
              style={{ marginLeft: "auto" }}
            >
              <button
                onClick={() => {
                  refExperience.current?.showDialog();
                }}
                type="button"
              >
                <EditIcon className="fill-gray-500 text-2xl" />
              </button>
            </div>
          )}
        </div>
      </CardOne>
      <DialogAddExperience
        editing
        ref={refExperience}
        closeModal={() => {
          refExperience.current && refExperience.current.showDialog();
        }}
      />
    </>
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
        editing={false}
        ref={refExperience}
        closeModal={() => {
          refExperience.current && refExperience.current.showDialog();
        }}
      />
    </div>
  );
};

export default TalentDetailExperience;
