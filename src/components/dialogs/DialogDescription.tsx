/* eslint-disable react/display-name */
import React, { forwardRef, useRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import CustomRating from "../common/CustomRating";
import CustomInput from "../common/CustomInput";
import CustomTextArea from "../common/CustomTextArea";

type DialogDescriptionProps = {
  closeModal(): void;
};
const DialogDescription = forwardRef<RefObject, DialogDescriptionProps>(
  ({ closeModal }, ref) => {
    const intpuRef = useRef<HTMLInputElement>(null);

    return (
      <CustomDialog ref={ref}>
        <input style={{ display: "none" }} ref={intpuRef} type="file" />

        <CardTwo className="p-[24px] min-w-[350px] w-[470px] space-y-5 rounded-xl">
          <div className="text-start space-y-4">
            <h2 className="text-lg text-black font-bold">
              Edita tu descripción
            </h2>
            <p className="text-gray-500 text-sm font-light">
              Tiempo de una nueva descripción? Edítala.
            </p>
          </div>
          <CustomTextArea label="Descripción" className="rounded-md" rows={3} />
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

export default DialogDescription;
