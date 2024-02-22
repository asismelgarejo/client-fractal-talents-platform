/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { LanguageData } from "@/types/Talent";
import LanguageForm from "../FormComponents/LanguageForm";
import CreationTitle from "../common/CreationTitle";

type DialogLanguageProps = {
  closeModal(): void;
  editing: boolean;
  // languageId: number;
};
const DialogLanguage = forwardRef<RefObject, DialogLanguageProps>(
  ({ closeModal, editing }, ref) => {
    const dispatch = useDispatch();

    const { control, handleSubmit, getValues, setValue } =
      useForm<LanguageData>({
        defaultValues: {
          language: {
            id: 1,
            name: "English",
          },
          level: {
            id: 1,
            name: "C1 Advanced",
          },
        },
      });
    const onSubmit: SubmitHandler<LanguageData> = async (data) => {
      console.log(data);
      dispatch.talent.UPDATE_SALARY(data);
      closeModal();
    };

    return (
      <CustomDialog ref={ref}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <CardTwo className="p-[24px] min-w-[400px] space-y-5 rounded-xl">
            <CreationTitle
              editing={editing}
              headerTexts={{
                create: "Agrega un nuevo idioma",
                edit: "Edita tu habilidad en el idioma",
              }}
              subheaderTexts={{
                create: "Agrega un nuevo idioma aprendido.",
                edit: "Edita tu habilidad en el idioma",
              }}
            />
            <LanguageForm />
            <div className="flex grow space-x-5">
              <CustomButton
                className="w-full"
                variant="gray_2"
                onClick={() => closeModal()}
              >
                Cancelar
              </CustomButton>
              <CustomButton className="w-full" type="submit">
                Agregar
              </CustomButton>
            </div>
          </CardTwo>
        </form>
      </CustomDialog>
    );
  }
);

export default DialogLanguage;
