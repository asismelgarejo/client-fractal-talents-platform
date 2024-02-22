/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import SocialNetworksForm from "../FormComponents/SocialNetworksForm";
import CreationTitle from "../common/CreationTitle";

type DialogSocialNetworksProps = {
  closeModal(): void;
};
const DialogSocialNetworks = forwardRef<RefObject, DialogSocialNetworksProps>(
  ({ closeModal }, ref) => {
    return (
      <CustomDialog ref={ref}>
        <CardTwo className="p-[24px] min-w-[400px] space-y-5 rounded-xl">
          <div className="space-y-5 ">
            <CreationTitle
              headerTexts={{
                create: "Agrega tus medios sociales",
              }}
              subheaderTexts={{
                create: "Agrega y muestra tus medios sociales.",
              }}
            />
            <SocialNetworksForm />
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
