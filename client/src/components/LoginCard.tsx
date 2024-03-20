import React from "react";
import { useState } from "react";
import Input from "@/components/Input";
import Button from "@/components/Button";
import supabase from "@/lib/supabaseClient";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addProfileUuid } from "@/store/auth/auth.slice";

const LoginCard = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const currentProfile = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();
  console.log(currentProfile);

  const handleSignIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data, error);
    if (data.user) {
      dispatch(addProfileUuid(data.user.id));
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSignIn(userEmail, userPassword);
  };

  return (
    <div className="h-screen w-full flex">
      <div className="h-full w-[45%] bg-white flex flex-col justify-center items-center ">
        <div className="flex flex-col items-center justify-center gap-12">
          <form onSubmit={handleSubmit}>
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
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
                <Input
                  type="password" // Change type to password
                  value={userPassword}
                  onChange={(e) => setUserPassword(e.target.value)}
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
