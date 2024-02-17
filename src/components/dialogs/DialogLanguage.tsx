/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import CustomSelect, { MenuItemProps } from "../common/CustomSelect";
import CustomRating from "../common/CustomRating";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import { LanguageData } from "@/types/Talent";

type DialogLanguageProps = {
  closeModal(): void;
  // languageId: number;
};
const DialogLanguage = forwardRef<RefObject, DialogLanguageProps>(
  ({ closeModal }, ref) => {
    const dispatch = useDispatch();

    const language = useSelector((root: IRootState) => root.talent);

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
          <CardTwo className="p-[24px] min-w-[400px] space-y-5" rd="md">
            <div className="text-start">
              <h2 className="text-lg text-black font-bold">
                Agrega un nuevo idioma{" "}
              </h2>
              <p className="text-gray-500 text-sm font-light">
                Agrega un nuevo idioma aprendido.{" "}
              </p>
            </div>
            <div className="space-y-3">
              <Controller
                name="language"
                control={control}
                rules={{ required: "username is required" }}
                render={({ field, fieldState }) => (
                  <CustomSelect
                    label="Idioma"
                    value={field.value.name}
                    className="w-full"
                    placeholder="Nombre  del idioma"
                    onChange={(option: any) => {
                      setValue("language", option);
                    }}
                    options={[
                      {
                        id: 1,
                        name: "Inglés",
                      },
                      {
                        id: 2,
                        name: "Español",
                      },
                    ]}
                  />
                )}
              />
              <Controller
                name="level"
                control={control}
                rules={{ required: "username is required" }}
                render={({ field, fieldState }) => (
                  <CustomSelect
                    label="Nivel"
                    value={field.value.name}
                    placeholder="Nivel del idioma"
                    className="w-full"
                    onChange={(option: any) => {
                      setValue("language", option);
                    }}
                    options={[]}
                  />
                )}
              />

              <CustomRating />
            </div>

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
