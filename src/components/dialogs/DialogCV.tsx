/* eslint-disable react/display-name */
import React, { Ref, forwardRef, useRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { UploadIcon } from "@/utils/icons";

type DialogCVProps = {
  closeModal(): void;
};
const DialogCV = forwardRef<RefObject, DialogCVProps>(({ closeModal }, ref) => {
  const intpuRef = useRef<HTMLInputElement>(null);

  return (
    <CustomDialog ref={ref}>
      <input style={{ display: "none" }} ref={intpuRef} type="file" />

      <CardTwo className="rounded-[12px] p-[24px] min-w-[400px] space-y-5">
        <div className="text-start">
          <h2 className="text-lg text-black font-bold">
            Agrega tu Curriculum Vitae
          </h2>
          <p className="text-gray-400 text-sm font-light">Sube tu nuevo CV.</p>
        </div>
        <div
          className="border rounded-lg border-gray-300 py-7 cursor-pointer"
          onClick={() => intpuRef.current?.click()}
        >
          <div className="flex flex-col items-center m-auto space-y-1">
            <span className="rounded bg-gray-100 rounded-full p-2 w-fit">
              <span className="rounded bg-gray-200 rounded-full flex items-center p-1 ">
                <UploadIcon className="text-[20px]" />
              </span>
            </span>
            <p className="text-primary-500 text-sm font-semibold">Sube tu CV</p>
            <p className="text-xs text-gray-500">PDF (max. 250 mb)</p>
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
          <CustomButton className="w-full">Subir</CustomButton>
        </div>
      </CardTwo>
    </CustomDialog>
  );
});

export default DialogCV;
