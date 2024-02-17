"use client";
import React from "react";
import CardTwo from "../common/Cards/CardTwo";
import UploadFile from "../UploadFile";
import clsx from "clsx";
import CustomButton from "../common/CustomButton";
import Link from "next/link";

const NewTalent = () => {
  return (
    <div
      className={clsx("w-full flex")}
      style={{
        height: "calc(100vh - 91px)",
      }}
    >
      <CardTwo className="drop-shadow-xl min-w-[700px] m-auto p-7 rounded-xl">
        <div className="relative">
          <div className="space-x-2 flex absolute top-0 right-0 ">
            <Link href={"/home"}>
              <CustomButton variant="outline">Volver</CustomButton>
            </Link>
            <CustomButton>Guardar</CustomButton>
          </div>
          <div className="space-y-2 ">
            <h2 className="text-xl font-bold">Nuevo Talento</h2>
            <p className="text-md">
              Detalla al nuevo talento que deseas agregar.
            </p>
          </div>
          <div className="space-y-4 p-5">
            <div className="space-y-5">
              <h3 className="font-bold">Curriculum Vitae</h3>
              <UploadFile
                title="Curriculum Vitae"
                description="PDF (max. 800x400px)"
              />
            </div>
            <div className="space-y-5">
              <h3 className="font-bold">Foto de perfil</h3>
              <UploadFile
                title="Foto de perfil"
                description="PNG o JPG (max. 800x400px)"
              />
            </div>
          </div>
        </div>
      </CardTwo>
    </div>
  );
};

export default NewTalent;
