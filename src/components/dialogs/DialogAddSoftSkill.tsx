/* eslint-disable react/display-name */
import React, { Ref, forwardRef, useRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { UploadIcon } from "@/utils/icons";
import CustomInput from "../common/CustomInput";
import SoftSkillForm from "../FormComponents/SoftSkillForm";
import CreationTitle from "../common/CreationTitle";

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
          <CreationTitle
            headerTexts={{
              create: "Agrega una nueva habilidad blanda",
            }}
            subheaderTexts={{
              create: "Agrega tu nueva experiencia blanda.",
            }}
          />
          <SoftSkillForm />
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
