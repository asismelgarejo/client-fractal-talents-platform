/* eslint-disable react/display-name */
import React, { Ref, forwardRef, useRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { UploadIcon } from "@/utils/icons";

type DialogCertificationProps = {
  closeModal(): void;
};
const DialogCertification = forwardRef<RefObject, DialogCertificationProps>(
  ({ closeModal }, ref) => {
    const intpuRef = useRef<HTMLInputElement>(null);

    return (
      <CustomDialog ref={ref}>
        <input style={{ display: "none" }} ref={intpuRef} type="file" />

        <CardTwo className="p-[24px] min-w-[350px] w-[470px] space-y-5" rd="md">
          <div className="text-start space-y-4">
            <h2 className="text-lg text-black font-bold">Agrega un archivo </h2>
            <p className="text-gray-500 text-sm font-light">
              Sube tu nuevo certificado, diploma o algún archivo que respalde
              tus aptitudes.
            </p>
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
              <p className="text-primary-500 text-sm font-semibold">
                Sube tu archivo
              </p>
              <p className="text-xs text-gray-500">PDF (max. 250 mb)</p>
            </div>
          </div>
          <div className="flex grow space-x-5">
            <CustomButton
              className="w-full"
              variant="gray_1"
              onClick={() => closeModal()}
            >
              Cancelar
            </CustomButton>
            <CustomButton className="w-full">Subir</CustomButton>
          </div>
        </CardTwo>
      </CustomDialog>
    );
  }
);

export default DialogCertification;
