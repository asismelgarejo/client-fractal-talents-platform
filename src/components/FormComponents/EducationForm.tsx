import React from "react";
import CustomInput from "../common/CustomInput";

const EducationForm = () => {
  return (
    <div className="space-y-2">
      <CustomInput
        label="Institución"
        placeholder="Nombre de la institución"
        className="rounded-md"
      />
      <CustomInput
        label="Carrera"
        placeholder="Nombre de la carrera"
        className="rounded-md"
      />
      <CustomInput
        label="Grado"
        placeholder="Grado de la carrera"
        className="rounded-md"
      />
      <div className="flex space-x-5">
        <CustomInput
          type="date"
          label="Año y mes de inicio"
          className="rounded-md"
        />
        <CustomInput type="date" label="Año y mes fin" className="rounded-md" />
      </div>
    </div>
  );
};

export default EducationForm;
