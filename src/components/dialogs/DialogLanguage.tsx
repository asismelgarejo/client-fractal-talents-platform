/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import CustomSelect from "../common/CustomSelect";
import CustomRating from "../common/CustomRating";

type DialogLanguageProps = {
  closeModal(): void;
};
const DialogLanguage = forwardRef<RefObject, DialogLanguageProps>(
  ({ closeModal }, ref) => {
    return (
      <CustomDialog ref={ref}>
        <CardTwo className="p-[24px] min-w-[400px] space-y-5" rd="md">
          <div className="text-start">
            <h2 className="text-lg text-black font-bold">
              Agrega un nuevo idioma{" "}
            </h2>
            <p className="text-gray-400 text-sm font-light">
              Agrega un nuevo idioma aprendido.{" "}
            </p>
          </div>
          <div className="space-y-3">
            <CustomSelect
              label="Idioma"
              value={""}
              className="w-full"
              placeholder="Nombre  del idioma"
              onChange={() => {}}
              options={[
                {
                  id: 1,
                  label: "Inglés",
                },
                {
                  id: 2,
                  label: "Español",
                },
              ]}
            />
            <CustomSelect
              label="Nivel"
              placeholder="Nivel del idioma"
              className="w-full"
              onChange={() => {}}
              value={""}
              options={[]}
            />
            <CustomRating />
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

export default DialogLanguage;
