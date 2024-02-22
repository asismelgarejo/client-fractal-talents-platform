/* eslint-disable react/display-name */
import React, { useState } from "react";
import CustomInput from "../common/CustomInput";
import CustomCheckbox from "../common/CustomCheckbox";

const ExperienceForm = () => {
    const [checked, setChecked] = useState(false);

  return (
    <div className="space-y-2">
      <CustomInput
        label="Empresa"
        placeholder="Nombre de la empresa"
        className="rounded-md"
      />
      <CustomCheckbox
        checked={checked}
        label="Aquí en FRACTAL"
        onClick={() => {
          setChecked(!checked);
        }}
      />
      <CustomInput
        label="Puesto"
        placeholder="Puesto en la empresa"
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
      <CustomCheckbox
        checked={checked}
        label="Hasta la actualidad"
        onClick={() => {
          setChecked(!checked);
        }}
      />
    </div>
  );
};

export default ExperienceForm;
