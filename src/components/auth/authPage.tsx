"use client";
import Image from "next/image";
import loginImage from "../../app/assets/image/login.png";
import registerImage from "../../app/assets/image/register.png";
import { useState } from "react";
import Login from "./login";
import Register from "./register";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="flex justify-around gap-20">
        <div>
          {isLogin ? (
            <Image src={loginImage} alt="Login" width={700} height={700} />
          ) : (
            <Image
              src={registerImage}
              alt="Register"
              width={700}
              height={700}
            />
          )}
        </div>
        <div className="w-1/2">
          <h1 className="text-center mb-5">Welcome to LM System</h1>
          <div className="bg-teal-500 flex rounded-full justify-around items-center p-4">
            <button
              onClick={() => setIsLogin(true)}
              className={` ${
                isLogin ? "bg-teal-600" : ""
              } border border-gray-300 p-3 px-10 text-white font-semibold  rounded-full`}
            >
              Login
            </button>
            <button
              onClick={() => setIsLogin(false)}
              className={`${
                isLogin ? "" : "bg-teal-600"
              } border border-gray-300 p-3 px-10 text-white font-semibold rounded-full`}
            >
              Register
            </button>
          </div>

          {isLogin ? <Login /> : <Register />}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
