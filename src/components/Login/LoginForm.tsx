"use client";
import React, { useState } from "react";
import CustomInput from "../common/CustomInput";
import CustomButton from "../common/CustomButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { SignIn } from "@/types/SignIn";
import { signinRepo } from "@/http/repositories/auth.repository";
import { useSnackbar } from "notistack";
import { AxiosError } from "axios";
import { EyeCrossedIcon, EyeIcon } from "@/utils/icons";

const LoginForm = () => {
  const router = useRouter();
  const { enqueueSnackbar } = useSnackbar();

  const { control, handleSubmit, getValues, setValue } = useForm<SignIn>({
    defaultValues: { username: "", password: "" },
  });

  const [loading, setLoading] = useState(false);
  const [inputType, setInputType] = useState<"password" | "text">("password");
  const onSubmit: SubmitHandler<SignIn> = async (data) => {
    try {
      setLoading(true);
      await signinRepo(data);
      router.push("/home");
    } catch (error: any) {
      console.log(">onSubmit", error);
      if (error instanceof AxiosError) {
        alert("axios error");
      }
      enqueueSnackbar(error?.message, {
        variant: "error",
        preventDuplicate: false,
        anchorOrigin: {
          vertical: "bottom",
          horizontal: "left",
        },
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="flex bg-white">
      <div className="w-[60%] m-auto p-4">
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
          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name="username"
              control={control}
              rules={{ required: "username is required" }}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  className="rounded-md"
                  label="Usuario"
                  placeholder="Nombre de usuario"
                  error={!!fieldState.error}
                />
              )}
            />
            <Controller
              name="password"
              control={control}
              rules={{ required: "password is required" }}
              render={({ field, fieldState }) => (
                <CustomInput
                  {...field}
                  className="rounded-md"
                  label="Contraseña"
                  placeholder="Contraseña"
                  error={!!fieldState.error}
                  type={inputType}
                  endIcon={
                    <button
                      type="button"
                      onClick={() =>
                        setInputType((prev) =>
                          prev === "password" ? "text" : "password"
                        )
                      }
                    >
                      {inputType === "password" ? (
                        <EyeIcon className={"fill-gray-400 text-[18.4px]"} />
                      ) : (
                        <EyeCrossedIcon className={"stroke-gray-400 text-[18.4px]"}/>
                      )}
                    </button>
                  }
                />
              )}
            />

            <br />
            <Link href="" className="text-sm text-primary-500 font-semibold">
              Olvidé mi contraseña
            </Link>
            <CustomButton
              className="w-full mt-4"
              type="submit"
              disabled={loading}
            >
              Iniciar sesión
            </CustomButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
