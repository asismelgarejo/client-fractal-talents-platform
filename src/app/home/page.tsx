import CustomButton from "@/components/common/CustomButton";
import CustomInput from "@/components/common/CustomInput";
import { AddIcon, EyesIcon } from "@/utils/icons";
import clsx from "clsx";
import React from "react";
import styles from "./home.module.css";

const page = () => {
  return (
    <div className={clsx("max-w-[1300px] m-auto py-5 px-4")}>
      <div className={styles.Container}>
        <div className={clsx(styles.ResultsContainer, "bg-lime-400")}>
          <CustomButton
            className={"text-red-500 fill-red-500"}
            btnVariant="outline"
            startIcon={<AddIcon />}
          >
            Nuevo Talento
          </CustomButton>
        </div>
        <div className={clsx(styles.TalentDetailContainer, "bg-red-300 space-y-4")}>
          <div className="flex">
            <div className="ml-auto flex space-x-5">
              <CustomInput
                startIcon={<EyesIcon />}
                className="my-auto"
                placeholder="Buscar talento o puesto"
              />
              <CustomButton
                className={"text-red-500 fill-red-500"}
                btnVariant="contained"
              >
                Buscar
              </CustomButton>
            </div>
          </div>

          <div className="drop-shadow-md w-full min-h-[100px] border rounded rounded-lg border-gray-500">

          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
