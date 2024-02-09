import React from "react";
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import { AddIcon, EyesIcon } from "@/utils/icons";

const CHIPS = [
  { ID: 1, name: "Habilidades" },
  { ID: 2, name: "Nivel de inglés" },
  { ID: 3, name: "Favoritos" },
];
const FiltersBar = () => {
  return (
    <div className="flex w-full" style={{ gridArea: "filters" }}>
      <CustomButton type="button" btnVariant="outline" startIcon={<AddIcon />}>
        Nuevo Talento
      </CustomButton>
      <div className="flex ml-auto space-x-5">
        <div className="flex space-x-4">
          {CHIPS.map((item) => (
            <span
              key={item.ID}
              className="px-4 py-2 bg-gray-100 rounded rounded-3xl text-black"
            >
              {item.name}
            </span>
          ))}
        </div>
        <div className="ml-auto flex space-x-5">
          <div className="min-w-[380px]">
            <CustomInput
              startIcon={<EyesIcon />}
              className="text-black"
              placeholder="Buscar talento o puesto"
            />
          </div>
          <CustomButton type="button" btnVariant="contained">
            Buscar
          </CustomButton>
        </div>
      </div>
    </div>
  );
};

export default FiltersBar;
