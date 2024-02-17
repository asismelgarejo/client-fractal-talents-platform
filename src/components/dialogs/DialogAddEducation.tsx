/* eslint-disable react/display-name */
import React, { Ref, forwardRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { DeleteIcon } from "@/utils/icons";

type DialogAddEducationProps = {
  closeModal(): void;
  editing: boolean;
};
const DialogAddEducation = forwardRef<RefObject, DialogAddEducationProps>(
  ({ closeModal, editing }, ref) => {
    return (
      <CustomDialog ref={ref}>
        <CardTwo className="p-[24px] min-w-[400px] space-y-5 h-fit" rd="md">
          <div className="text-start relative">
            <h2 className="text-lg text-black font-bold">
              {!editing
                ? "Agrega una nueva experiencia educativa"
                : "Edita tu experiencia educativa"}
            </h2>
            <p className="text-gray-500 text-sm font-light">
              {!editing
                ? "Describe y agrega tu nueva experiencia educativa."
                : "La vida esta llena de cambios. Edita tu experiencia educativa."}
            </p>
            {editing && (
              <button type="button" className="absolute top-[0] right-0">
                <DeleteIcon className="fill-error-500 text-[18px]" />
              </button>
            )}
          </div>
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
              <CustomInput
                type="date"
                label="Año y mes fin"
                className="rounded-md"
              />
            </div>
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

export default DialogAddEducation;
