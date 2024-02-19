/* eslint-disable react/display-name */
import React, { Ref, forwardRef, useRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { UploadIcon } from "@/utils/icons";
import UploadFile from "../UploadFile";

type DialogCVProps = {
  closeModal(): void;
};
const DialogCV = forwardRef<RefObject, DialogCVProps>(({ closeModal }, ref) => {
  const intpuRef = useRef<HTMLInputElement>(null);

  return (
    <CustomDialog ref={ref}>
      <input style={{ display: "none" }} ref={intpuRef} type="file" />

      <CardTwo className="p-[24px] min-w-[400px] space-y-5 rounded-xl" >
        <div className="text-start">
          <h2 className="text-lg text-black font-bold">
            Agrega tu Curriculum Vitae
          </h2>
          <p className="text-gray-500 text-sm font-light">Sube tu nuevo CV.</p>
        </div>
        <UploadFile description="PDF (max. 250 mb)" title="Sube tu CV"/>
        <div className="flex grow space-x-5">
          <CustomButton
            className="w-full"
            variant="gray_2"
            onClick={() => closeModal()}
          >
            Cancelar
          </CustomButton>
          <CustomButton className="w-full">Subir</CustomButton>
        </div>
      </CardTwo>
    </CustomDialog>
  );
});

export default DialogCV;
