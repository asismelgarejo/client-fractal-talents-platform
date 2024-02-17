/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import CustomDialog, { RefObject } from "@/components/common/CustomDialog";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import CardTwo from "../common/Cards/CardTwo";
import BtnCheckbox from "../common/BtnCheckbox";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "@/store";
import { TalentSalary } from "@/types/Talent";

type DialogAddSalaryRangeProps = {
  closeModal(): void;
};

const DialogAddSalaryRange = forwardRef<RefObject, DialogAddSalaryRangeProps>(
  ({ closeModal }, ref) => {
    const dispatch = useDispatch();
    const talentData = useSelector((root: IRootState) => root.talent);

    const { control, handleSubmit, getValues, setValue } =
      useForm<TalentSalary>({
        defaultValues: {
          maximum: talentData.salary.maximum,
          minimum: talentData.salary.minimum,
          currency: talentData.salary.currency,
        },
      });
    const onSubmit: SubmitHandler<TalentSalary> = async (data) => {
      console.log(data);
      dispatch.talent.UPDATE_SALARY(data);
      closeModal();
    };
    return (
      <CustomDialog ref={ref}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardTwo className="p-[24px] min-w-[400px] space-y-5" rd="md">
            <div className="text-start">
              <h2 className="text-lg text-black font-bold">
                Agrega tu banda salarial
              </h2>
              <p className="text-gray-500 text-sm font-light">
                Agrega el rango de tus expectativas salariales.
              </p>
            </div>
            <div className="space-y-5">
              <Controller
                name="currency"
                control={control}
                rules={{ required: "username is required" }}
                render={({}) => (
                  <div className="space-y-3">
                    <BtnCheckbox
                      className="w-full py-4"
                      onClick={() => {
                        setValue("currency", "PEN");
                      }}
                      checked={getValues("currency") === "PEN"}
                    >
                      Soles
                    </BtnCheckbox>
                    <BtnCheckbox
                      className="w-full py-4"
                      onClick={() => {
                        setValue("currency", "USD");
                      }}
                      checked={getValues("currency") === "USD"}
                    >
                      Dólares
                    </BtnCheckbox>
                  </div>
                )}
              />
              <div className="flex space-x-3">
                <Controller
                  name="minimum"
                  control={control}
                  rules={{ required: "Cantidad inicial es requerida" }}
                  render={({ field, fieldState }) => (
                    <CustomInput
                      {...field}
                      type="number"
                      label="Monto inicial"
                      className="rounded-md"
                      error={!!fieldState.error}
                    />
                  )}
                />
                <Controller
                  name="maximum"
                  control={control}
                  rules={{ required: "Cantidad final es requerida" }}
                  render={({ field, fieldState }) => (
                    <CustomInput
                      {...field}
                      type="number"
                      label="Monto final"
                      className="rounded-md"
                      error={!!fieldState.error}
                    />
                  )}
                />
              </div>
            </div>
            <div className="flex grow space-x-3">
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

export default DialogAddSalaryRange;
