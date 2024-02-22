/* eslint-disable react/display-name */
import React, { Ref, forwardRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { DeleteIcon } from "@/utils/icons";
import EducationForm from "../FormComponents/EducationForm";
import CreationTitle from "../common/CreationTitle";

type DialogAddEducationProps = {
  closeModal(): void;
  editing: boolean;
};
const DialogAddEducation = forwardRef<RefObject, DialogAddEducationProps>(
  ({ closeModal, editing }, ref) => {
    return (
      <CustomDialog ref={ref}>
        <CardTwo className="p-[24px] min-w-[400px] h-fit rounded-xl">
          <div className="relative space-y-5 ">
            {editing && (
              <button type="button" className="absolute top-[0] right-0">
                <DeleteIcon className="fill-error-500 text-[18px]" />
              </button>
            )}
            <CreationTitle
              editing={editing}
              headerTexts={{
                create: "Agrega una nueva experiencia educativa",
                edit: "Edita tu experiencia educativa",
              }}
              subheaderTexts={{
                create: "Describe y agrega tu nueva experiencia educativa.",
                edit: "La vida esta llena de cambios. Edita tu experiencia educativa.",
              }}
            />
            <EducationForm />
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
          </div>
        </CardTwo>
      </CustomDialog>
    );
  }
);

export default DialogAddEducation;
