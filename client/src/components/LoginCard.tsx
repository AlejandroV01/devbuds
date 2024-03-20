import React from "react";
import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";

const LoginCard = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  return (
    <div className="h-screen w-full flex">
      <div className="h-full w-[45%] bg-white flex flex-col justify-center items-center ">
        <div className="flex flex-col items-center justify-center gap-12">
          <form action="">
            <div className="flex flex-col gap-3 items-center justify-center ">
              <h1 className="font-bold text-2xl">DevBuds</h1>
              <div className="">
                <label htmlFor="username" className="text-sm">
                  Username
                </label>
                <Input
                  type="text"
                  value={userEmail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-[325px]"
                />
              </div>

              <div>
                <label htmlFor="username" className="text-sm">
                  Password
                </label>
                <Input
                  type="text"
                  value={userPassword}
                  onChange={(e) => setUserEmail(e.target.value)}
                  className="w-[325px]"
                />
              </div>
              <span className="flex justify-end  w-full py-2">
                <a className="text-sm underline cursor-pointer">
                  Forgot Password?
                </a>
              </span>

              <Button variant="primary" children="Log In" className="w-full" />
            </div>
          </form>
        </div>
      </div>
      <div className="h-full w-[55%] bg-primary"></div>
    </div>
  );
};

export default LoginCard;
