/* eslint-disable react/display-name */
import React, { forwardRef } from "react";
import CustomSelect, { MenuItemProps } from "../common/CustomSelect";
import CustomRating from "../common/CustomRating";
import { Controller, useForm } from "react-hook-form";
import { LanguageData } from "@/types/Talent";

const LanguageForm = () => {
  const { control, handleSubmit, getValues, setValue } = useForm<LanguageData>({
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

  return (
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
  );
};

export default LanguageForm;
