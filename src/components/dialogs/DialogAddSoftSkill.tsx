/* eslint-disable react/display-name */
import React, { Ref, forwardRef, useRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { UploadIcon } from "@/utils/icons";
import CustomInput from "../common/CustomInput";

type DialogAddSoftSkillProps = {
  closeModal(): void;
};
const DialogAddSoftSkill = forwardRef<RefObject, DialogAddSoftSkillProps>(
  ({ closeModal }, ref) => {
    const intpuRef = useRef<HTMLInputElement>(null);

    return (
      <CustomDialog ref={ref}>
        <input style={{ display: "none" }} ref={intpuRef} type="file" />

        <CardTwo className="p-[24px] min-w-[400px] space-y-5 rounded-xl">
          <div className="text-start">
            <h2 className="text-lg text-black font-bold">
              Agrega una nueva habilidad blanda
            </h2>
            <p className="text-gray-500 text-sm font-light">
              Agrega tu nueva experiencia blanda.
            </p>
          </div>
          <div className="space-y-2">
            <CustomInput
              label="Habilidad blanda"
              placeholder="Nombre de la habilidad"
              className="rounded-md"
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

export default DialogAddSoftSkill;
