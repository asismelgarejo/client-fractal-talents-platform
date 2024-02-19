/* eslint-disable react/display-name */
import React, { Ref, forwardRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";

type DialogSocialNetworksProps = {
  closeModal(): void;
};
const DialogSocialNetworks = forwardRef<RefObject, DialogSocialNetworksProps>(
  ({ closeModal }, ref) => {
    return (
      <CustomDialog ref={ref}>
        <CardTwo className="p-[24px] min-w-[400px] space-y-5 rounded-xl">
          <div className="text-start">
            <h2 className="text-lg text-black font-bold">
              Agrega tus medios sociales{" "}
            </h2>
            <p className="text-gray-500 text-sm font-light">
              Agrega y muestra tus medios sociales.
            </p>
          </div>
          <div className="space-y-2">
            <CustomInput label="Link de LinkedIn" className="rounded-md" /> 
            <CustomInput label="Link de GitHub" className="rounded-md" />
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

export default DialogSocialNetworks;
