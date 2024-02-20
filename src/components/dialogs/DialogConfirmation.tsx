/* eslint-disable react/display-name */
import React, { forwardRef, useRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { InfoIcon } from "@/utils/icons";
import clsx from "clsx";

export type ConfirmationDialog = "info" | "warning" | "error" | "success";

type DialogConfirmationProps = {
  cancel(): void;
  confirm(): void;
  description: string;
  type: keyof typeof ICONS;
};

const ICONS: Record<ConfirmationDialog, string> = {
  error: "bg-error-500",
  warning: "bg-orange-500",
  success: "",
  info: "",
};
const TITLES: Record<ConfirmationDialog, string> = {
  //Completar
  error: "ERROR",
  warning: "WARNING",
  success: "",
  info: "",
};

const DialogConfirmation = forwardRef<RefObject, DialogConfirmationProps>(
  ({ cancel, description, type, confirm }, ref) => {
    const intpuRef = useRef<HTMLInputElement>(null);

    const colorIcon = ICONS[type];
    const title = TITLES[type];

    return (
      <CustomDialog ref={ref}>
        <input style={{ display: "none" }} ref={intpuRef} type="file" />
        <CardTwo className="p-[0px] min-w-[350px] w-[470px]  rounded-xl overflow-hidden">
          <div
            className={clsx(
              "flex h-[120px] w-full items-center justify-center",
              colorIcon
            )}
          >
            <InfoIcon className="text-[70px] fill-white" />
          </div>
          <div className="p-[24px] m-0 space-y-5">
            <div className="text-start space-y-4 ">
              <h2 className="text-xl text-black font-bold text-center">
                {title}
              </h2>
              <p className="text-gray-500 text-lg font-normal text-center">
                {description}
              </p>
            </div>
            <div className="flex grow space-x-5">
              <CustomButton
                className="w-full"
                variant="gray_2"
                onClick={() => cancel()}
              >
                Cancelar
              </CustomButton>
              <CustomButton className="w-full" onClick={() => confirm()}>
                Confirmar
              </CustomButton>
            </div>
          </div>
        </CardTwo>
      </CustomDialog>
    );
  }
);

export default DialogConfirmation;
