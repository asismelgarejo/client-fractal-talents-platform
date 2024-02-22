/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { DeleteIcon } from "@/utils/icons";
import ExperienceForm from "../FormComponents/ExperienceForm";
import CreationTitle from "../common/CreationTitle";

type DialogAddExperienceProps = {
  closeModal(): void;
  editing: boolean;
  deleteRecord?(): void;
};
const DialogAddExperience = forwardRef<RefObject, DialogAddExperienceProps>(
  ({ closeModal, deleteRecord, editing }, ref) => {
    return (
      <CustomDialog ref={ref}>
        <CardTwo className="p-[24px] min-w-[400px] space-y-5">
          <div className="relative">
            {editing && (
              <button
                type="button"
                className="absolute top-[0] right-0 z-50"
                onClick={() => deleteRecord && deleteRecord()}
              >
                <DeleteIcon className="fill-error-500 text-[18px]" />
              </button>
            )}
            <CreationTitle
              editing={editing}
              headerTexts={{
                create: "Agrega una nueva experiencia",
                edit: "Edita tu experiencia",
              }}
              subheaderTexts={{
                create: "Describe y agrega tu nueva experiencia laboral.",
                edit: "La vida esta llena de cambios. Edita tu experiencia laboral.",
              }}
            />
          </div>
          <ExperienceForm />
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
