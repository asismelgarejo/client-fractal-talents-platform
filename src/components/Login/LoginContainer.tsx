import React from "react";
import styles from "./Login.module.css";
import Image from "next/image";
import LoginForm from "./LoginForm";

const LoginContainer = () => {
  return (
    <div className={styles.LoginContainer}>
      <LoginForm />
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
