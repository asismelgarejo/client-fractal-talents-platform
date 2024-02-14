import React from "react";
import styles from "./TalentDetail.module.css";
import CustomChip from "@/components/common/CustomChip";
import clsx from "clsx";
import { AddIcon } from "@/utils/icons";

const TechnicalSkills = () => {
  return (
    <div className="space-y-2 relative">
      <button type="button" className="absolute right-0 top-0 p-1">
        <AddIcon className="text-[12px] fill-gray-400" />
      </button>
      <h2 className="text-gray-500 font-bold text-sm">Habilidades Técnicas</h2>
      <div className="flex space-x-1 flex-wrap items-center gap-2">
        <CustomChip label="JS" />
        <CustomChip label="Java" />
        <CustomChip label="Java" />
        <CustomChip label="Java" />
        <CustomChip label="Java" />
        <CustomChip label="Java" />
        <CustomChip label="Java" />
        <CustomChip label="Java" />
        <CustomChip label="Java" />
      </div>
    </div>
  );
};
const SoftSkills = () => {
  return (
    <div className="space-y-2 relative">
      <h2 className="text-gray-500 font-bold text-sm">Habilidades Blandas</h2>
      <button type="button" className="absolute right-0 top-0 p-1">
        <AddIcon className="text-[12px] fill-gray-400" />
      </button>
      <div className="flex space-x-1 flex-wrap items-center gap-2">
        <CustomChip color="secondary" label="JS" />
        <CustomChip color="secondary" label="JS" />
        <CustomChip color="secondary" label="JS" />
        <CustomChip color="secondary" label="JS" />
        <CustomChip color="secondary" label="JS" />
      </div>
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
