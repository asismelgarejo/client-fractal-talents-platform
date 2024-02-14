/* eslint-disable react/display-name */
import React, { Ref, forwardRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";

type DialogSalaryProps = {
  closeModal(): void;
};
const DialogSalary = forwardRef<RefObject, DialogSalaryProps>(
  ({ closeModal }, ref) => {
    return (
      <CustomDialog ref={ref}>
        <CardTwo className="rounded-[12px] p-[24px] min-w-[400px] space-y-5">
          <div className="text-start">
            <h2 className="text-lg text-black font-bold">
              Agrega tu banda salarial
            </h2>
            <p className="text-gray-400 text-sm font-light">
              Agrega el rango de tus expectativas salariales.
            </p>
          </div>
          <div className="space-y-2">
            <CustomInput className="rounded-md" />
            <CustomInput className="rounded-md" />
            <br />
            <div className="flex space-x-5">
              <CustomInput type="number" label="Monto inicial" className="rounded-md" />
              <CustomInput type="number" label="Monto final" className="rounded-md" />
            </div>
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
  }
);

export default DialogSalary;
