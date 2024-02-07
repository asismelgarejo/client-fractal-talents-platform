import React from "react";
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import { EyesIcon } from "@/utils/icons";

const CHIPS = [
  { ID: 1, name: "Habilidades" },
  { ID: 2, name: "Nivel de inglés" },
  { ID: 3, name: "Favoritos" },
];
const Filters = () => {
  return (
    <div className="flex bg-orange-200 mr-auto" style={{ gridArea: "filters" }}>
      <div className="bg-orange-300  flex space-x-4">
        {CHIPS.map((item) => (
          <span
            key={item.ID}
            className="px-4 py-2 bg-gray-200 rounded rounded-3xl text-black"
          >
            {item.name}
          </span>
        ))}
      </div>
      <div className="ml-auto flex space-x-5 bg-gray-600">
        <CustomInput
          startIcon={<EyesIcon />}
          className="my-auto"
          placeholder="Buscar talento o puesto"
        />
        <CustomButton btnVariant="contained">Buscar</CustomButton>
      </div>
    </div>
  );
};

export default Filters;
