"use client";
import React, { useState } from "react";
import CustomInput from "@/components/common/CustomInput";
import CustomButton from "@/components/common/CustomButton";
import { AddIcon, EyesIcon } from "@/utils/icons";
import FloatingMenu from "../common/FloatingMenu";
import Link from "next/link";
import { MenuItemProps } from "../common/FloatingMenu";

const SKILLS = [
  { id: 1, label: "Docker" },
  { id: 2, label: "Data Structure" },
  { id: 3, label: "Nginx" },
];
const ENGLISH_LEVEL = [
  { id: 1, label: "Básico" },
  { id: 2, label: "Intermedio" },
  { id: 3, label: "Avanzado" },
];

const Menus = () => {
  const [skills, setSkills] = useState<MenuItemProps[]>([]);
  const [englishLevel, setEnglishLevel] = useState<MenuItemProps | null>(null);
  const [favorite, setFavorite] = useState<MenuItemProps | null>(null);

  return (
    <div className="flex space-x-4">
      <FloatingMenu
        onChange={(items) => {
          setSkills(items as MenuItemProps[]);
        }}
        multiple
        value={skills}
        label={"Habilidades"}
        items={SKILLS}
      />
      <FloatingMenu
        onChange={(item) => {
          setEnglishLevel(item as MenuItemProps);
        }}
        label="Nivel de inglés"
        items={ENGLISH_LEVEL}
        value={englishLevel}
      />
      <FloatingMenu
        label="Favoritos"
        items={[]}
        onChange={(item) => {
          setFavorite(item as MenuItemProps);
        }}
        value={favorite}
      />
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
