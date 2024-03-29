import React, { useRef } from "react";
import styles from "./TalentDetail.module.css";
import CustomChip from "@/components/common/CustomChip";
import clsx from "clsx";
import { AddIcon } from "@/utils/icons";
import DialogAddTechnicalSkill from "@/components/dialogs/DialogAddTechnicalSkill";
import { RefObject } from "@/components/common/CustomDialog";
import DialogAddSoftSkill from "@/components/dialogs/DialogAddSoftSkill";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";

const TechnicalSkills = () => {
  const refSkill = useRef<RefObject>(null);
  const { user: userData, talent: talentData } = useSelector(
    (root: IRootState) => root
  );

  return (
    <div className="space-y-2 relative">
      {userData && (
        <button
          type="button"
          className="absolute right-0 top-0 p-1"
          onClick={() => refSkill.current?.showDialog()}
        >
          <AddIcon className="text-[12px] fill-gray-400" />
        </button>
      )}
      <h2 className="text-gray-500 font-bold text-sm">Habilidades Técnicas</h2>
      <div className="flex space-x-1 flex-wrap items-center gap-2">
        {talentData.technicalSkills.map((skill) => (
          <CustomChip key={skill.id} color="primary" label={skill.name} />
        ))}
      </div>
      <DialogAddTechnicalSkill
        ref={refSkill}
        closeModal={() => {
          refSkill.current && refSkill.current.showDialog();
        }}
      />
    </div>
  );
};
const SoftSkills = () => {
  const { user: userData, talent: talentData } = useSelector(
    (root: IRootState) => root
  );
  const refSkill = useRef<RefObject>(null);
  return (
    <div className="space-y-2 relative">
      {userData && (
        <button
          type="button"
          className="absolute right-0 top-0 p-1"
          onClick={() => refSkill.current?.showDialog()}
        >
          <AddIcon className="text-[12px] fill-gray-400" />
        </button>
      )}
      <h2 className="text-gray-500 font-bold text-sm">Habilidades Blandas</h2>

      <div className="flex space-x-1 flex-wrap items-center gap-2">
        {talentData.softSkills.map((skill) => (
          <CustomChip key={skill.id} color="secondary" label={skill.name} />
        ))}
      </div>
      <DialogAddSoftSkill
        ref={refSkill}
        closeModal={() => {
          refSkill.current && refSkill.current.showDialog();
        }}
      />
    </div>
  );
};

const TalentDetailSkills = () => {
  return (
    <section className={clsx(styles.TalentDetailSkills, "w-full")}>
      <TechnicalSkills />
      <SoftSkills />
    </section>
  );
};
export default TalentDetailSkills;
