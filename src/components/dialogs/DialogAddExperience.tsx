/* eslint-disable react/display-name */
import React, { Ref, forwardRef, useState } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import CustomCheckbox from "../common/CustomCheckbox";

type DialogAddExperienceProps = {
  closeModal(): void;
};
const DialogAddExperience = forwardRef<RefObject, DialogAddExperienceProps>(
  ({ closeModal }, ref) => {
    const [checked, setChecked] = useState(false);
    return (
      <CustomDialog ref={ref}>
        <CardTwo className="p-[24px] min-w-[400px] space-y-5" rd="md">
          <div className="text-start">
            <h2 className="text-lg text-black font-bold">
              Agrega una nueva experiencia
            </h2>
            <p className="text-gray-500 text-sm font-light">
              Describe y agrega tu nueva experiencia laboral.
            </p>
          </div>
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
              <CustomInput
                type="date"
                label="Año y mes fin"
                className="rounded-md"
              />
            </div>
            <CustomCheckbox
              checked={checked}
              label="Hasta la actualidad"
              onClick={() => {
                setChecked(!checked);
              }}
            />
          </div>
          <div className="flex grow space-x-5">
            <CustomButton
              className="w-full"
              variant="gray_2"
              onClick={() => closeModal()}
            >
              Cancelar
            </CustomButton>
            <CustomButton className="w-full">Agregar</CustomButton>
          </div>
        </CardTwo>
      </CustomDialog>
    );
  }
);

export default DialogAddExperience;
