/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import CustomSelect, { MenuItemProps } from "../common/CustomSelect";
import CustomRating from "../common/CustomRating";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import { LanguageData } from "@/types/Talent";
import { DeleteIcon } from "@/utils/icons";

type DialogLanguageProps = {
  closeModal(): void;
  editing: boolean;
  // languageId: number;
};
const DialogLanguage = forwardRef<RefObject, DialogLanguageProps>(
  ({ closeModal, editing }, ref) => {
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
          <CardTwo className="p-[24px] min-w-[400px] space-y-5 rounded-xl">
            <div className="text-start relative">
              <h2 className="text-lg text-black font-bold">
                {!editing
                  ? "Agrega un nuevo idioma"
                  : "Edita tu habilidad en el idioma"}
              </h2>
              <p className="text-gray-500 text-sm font-light">
                {!editing
                  ? "Agrega un nuevo idioma aprendido."
                  : "Edita tu habilidad en el idioma"}
              </p>
              {editing && (
                <button type="button" className="absolute top-[0] right-0">
                  <DeleteIcon className="fill-error-500 text-[18px]" />
                </button>
              )}
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
                    variant="gray_2"
                    change={(option) => {
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
                    variant="gray_2"
                    change={(option) => {
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
