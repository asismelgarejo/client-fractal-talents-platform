import React from "react";
import styles from "./Login.module.css";
import Image from "next/image";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import Link from "next/link";

const LoginContainer = () => {
  return (
    <div className={styles.LoginContainer}>
      <div className="flex bg-white">
        <div className="w-[80%] m-auto p-4">
          <Image
            src={"/assets/fractal_logo.svg"}
            style={{}}
            height={21}
            width={120}
            className="w-[244px] h-auto"
            alt="fractal logo"
          />
          <br />
          <div>
            <div>
              <h2 className="text-md font-semibold">Inicio de sesión</h2>
            </div>
            <br />
            <div className="space-y-4">
              <CustomInput
                className="rounded-md"
                label="Usuario"
                placeholder="Nombre de usuario"
              />
              <CustomInput
                className="rounded-md"
                label="Contraseña"
                placeholder="Contraseña"
              />
              <br />
              <Link href="" className="text-sm text-primary-500 font-semibold">
                Olvidé mi contraseña
              </Link>
              <CustomButton className="w-full mt-4" variant="contained">
                Iniciar sesión
              </CustomButton>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 flex">
        <div className="80% relative m-auto">
          <Image
            src={"/assets/login-bg.svg"}
            style={{}}
            height={200}
            width={200}
            className="w-[100%] m-auto"
            alt="map"
          />
          <Image
            src={"/assets/people.svg"}
            style={{}}
            height={200}
            width={200}
            className="w-[100%] m-auto absolute inset-x-0 inset-y-0"
            alt="map"
          />
        </div>
      </div>
    </div>
  );
};

export default LoginContainer;
