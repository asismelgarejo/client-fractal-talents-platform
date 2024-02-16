/* eslint-disable react/display-name */
import React, { Ref, forwardRef, useRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { UploadIcon } from "@/utils/icons";
import CustomInput from "../common/CustomInput";

type DialogAddTechnicalSkillProps = {
  closeModal(): void;
};
const DialogAddTechnicalSkill = forwardRef<
  RefObject,
  DialogAddTechnicalSkillProps
>(({ closeModal }, ref) => {
  const intpuRef = useRef<HTMLInputElement>(null);

  return (
    <CustomDialog ref={ref}>
      <input style={{ display: "none" }} ref={intpuRef} type="file" />

      <CardTwo className="p-[24px] min-w-[400px] space-y-5" rd="md">
        <div className="text-start">
          <h2 className="text-lg text-black font-bold">
            Agrega una nueva habilidad técnica
          </h2>
          <p className="text-gray-400 text-sm font-light">
            Agrega tu nueva experiencia técnica.
          </p>
        </div>
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
        <div className="flex grow space-x-5">
          <CustomButton
            className="w-full"
            variant="outline"
            onClick={() => closeModal()}
          >
            Cancelar
          </CustomButton>
          <CustomButton className="w-full">Agregar</CustomButton>
        </div>
      </CardTwo>
    </CustomDialog>
  );
});

export default DialogAddTechnicalSkill;
