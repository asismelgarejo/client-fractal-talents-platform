/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import CustomInput from "../common/CustomInput";
import BtnCheckbox from "../common/BtnCheckbox";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { TalentSalary } from "@/types/Talent";
import { useSelector } from "react-redux";
import { IRootState } from "@/store";
import CreationTitle from "../common/CreationTitle";

const SalaryRangeForm = () => {
  const talentData = useSelector((root: IRootState) => root.talent);

  const { control, handleSubmit, getValues, setValue } = useForm<TalentSalary>({
    defaultValues: {
      maximum: talentData.salary.maximum,
      minimum: talentData.salary.minimum,
      currency: talentData.salary.currency,
    },
  });

  return (
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
  );
};

export default SalaryRangeForm;
