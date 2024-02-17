/* eslint-disable react/display-name */
import React, { Ref, forwardRef, useRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { UploadIcon } from "@/utils/icons";
import UploadFile from "../UploadFile";

type DialogCertificationProps = {
  closeModal(): void;
};
const DialogCertification = forwardRef<RefObject, DialogCertificationProps>(
  ({ closeModal }, ref) => {
    return (
      <CustomDialog ref={ref}>
        <CardTwo className="p-[24px] min-w-[350px] w-[470px] space-y-5" rd="md">
          <div className="text-start space-y-4">
            <h2 className="text-lg text-black font-bold">Agrega un archivo </h2>
            <p className="text-gray-500 text-sm font-light">
              Sube tu nuevo certificado, diploma o algún archivo que respalde
              tus aptitudes.
            </p>
          </div>
          <UploadFile description="PDF (max. 250 mb)" title="Sube tu archivo" />
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
  }
);

export default DialogCertification;
