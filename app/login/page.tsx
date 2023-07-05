"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Login() {
  const router = useRouter();

  const [value, setValue] = useState({
    mail: "admin",
    password: "admin",
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/home");
  };
  return (
    <div className="h-screen bg-gradient-to-r from-[#FEAF00] to-[#F8D442] flex justify-center items-center">
      {/* Login Container */}
      <div className="w-[475px] h-[550px] bg-white rounded-[20px]">
        {/* title */}
        <div className="flex justify-center pt-[44px] items-center">
          <div className="h-[20px] w-1 bg-yellow border-0 "></div>
          <span className="flex justify-center ml-2 text-2xl font-bold">
            MANAGE COURSES
          </span>
        </div>
        <div className="mt-10">
          <div className="flex justify-center text-xl font-semibold">
            Sign In
          </div>
          <div className="mt-2 flex justify-center text-sm font-normal">
            Enter your credentials to access your account
          </div>
        </div>
        {/* inputSection */}
        <div className="mt-10 p-8">
          <form onSubmit={handleSubmit}>
            <div className="">
              <label>Email</label>
              <input
                type="text"
                placeholder="Enter your mail"
                className="w-full h-[40px]  rounded-lg border-dirtyWhite border-solid border-2 pl-3 text-sm font-medium"
                value={value.mail}
                onChange={(event) => {
                  setValue({ ...value, mail: event.target.value });
                }}
              />
            </div>
            <div className="mt-5">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full h-[40px]  rounded-lg border-dirtyWhite border-solid border-2 pl-3 text-sm font-medium"
                value={value.password}
                onChange={(event) => {
                  setValue({ ...value, password: event.target.value });
                }}
              />
            </div>
            <button
              type="submit"
              className="mt-7 w-full h-[40px] rounded-lg text-dirtyWhite bg-yellow  hover:bg-dirtyWhite hover:text-yellow hover:border-yellow hover:border-2"
            >
              SIGN IN
            </button>
            <span className="mt-7 flex justify-center items-center font-normal text-sm">
              Forgot your password?
              <u className="text-yellow"> Reset Password</u>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
