import React from "react";
import CustomInput from "../common/CustomInput";

const TechSkillForm = () => {
  return (
    <div className="space-y-2">
      <CustomInput
        label="Habilidad técnica"
        placeholder="Nombre de la habilidad"
        className="rounded-md"
      />
      <CustomInput
        label="Años de experiencia"
        placeholder="Nro. de años"
        className="rounded-md"
      />
    </div>
  );
};

export default TechSkillForm;
