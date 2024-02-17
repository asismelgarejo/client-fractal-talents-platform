"use client";
import React, { useState } from "react";
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import { AddIcon, EyesIcon } from "@/utils/icons";
import FloatingMenu from "../common/FloatingMenu";
import Link from "next/link";

const SKILLS = [
  { id: 1, label: "Docker" },
  { id: 2, label: "JS" },
  { id: 3, label: "Avanzado" },
];
const ENGLISH_LEVEL = [
  { id: 1, label: "Básico" },
  { id: 2, label: "Intermedio" },
  { id: 3, label: "Avanzado" },
];

const Menus = () => {
  const [skill, setSkill] = useState<any>(null);

  return (
    <div className="flex space-x-4">
      <FloatingMenu
        onChange={(item) => {
          setSkill(item);
        }}
        label={skill?.label ?? "Habilidades"}
        items={SKILLS}
      />
      <FloatingMenu
        onChange={() => {}}
        label="Nivel de inglés"
        items={ENGLISH_LEVEL}
      />
      <FloatingMenu onChange={() => {}} label="Favoritos" items={[]} />
    </div>
  );
};
const SearchInput = () => {
  return (
    <div className="ml-auto flex space-x-5">
      <div className="min-w-[380px]">
        <CustomInput
          startIcon={<EyesIcon />}
          className="text-black shadow-md"
          placeholder="Buscar talento o puesto"
        />
      </div>
      <CustomButton type="button" variant="contained">
        Buscar
      </CustomButton>
    </div>
  );
};

const FiltersBar = () => {
  return (
    <div className="flex w-full" style={{ gridArea: "filters" }}>
      <Link href="/home/nuevo_talento">
        <CustomButton type="button" variant="outline" startIcon={<AddIcon />}>
          Nuevo Talento
        </CustomButton>
      </Link>
      <div className="flex ml-auto space-x-5">
        <Menus />
        <SearchInput />
      </div>
    </div>
  );
};

export default FiltersBar;
