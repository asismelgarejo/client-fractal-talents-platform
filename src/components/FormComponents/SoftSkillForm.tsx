import React from "react";
import CustomInput from "../common/CustomInput";

const SoftSkillForm = () => {
  return (
    <div className="space-y-2">
      <CustomInput
        label="Habilidad blanda"
        placeholder="Nombre de la habilidad"
        className="rounded-md"
      />
    </div>
  );
};

export default SoftSkillForm;
