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
  const [validCredentials, setValidCredentials] = useState(true);

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
      console.log("Successfully logged in!");
      setValidCredentials(true);
      dispatch(addProfileUuid(data.user.id));
    } else {
      setValidCredentials(false);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    handleSignIn(userEmail, userPassword);
  };

  return (
    <div className="h-screen w-full flex">
      <div className="h-full w-[45%] bg-white flex flex-col justify-center items-center ">
        <div className="flex flex-col items-center justify-center gap-5">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 items-center justify-center ">
              <h1 className="font-bold text-2xl">DevBuds</h1>

              {!validCredentials && (
                <span className=" w-full flex justify-start">
                  <p className="text-xs text-destructive">
                    Invalid login credentials.
                  </p>
                </span>
              )}

              <div className="">
                <label htmlFor="username" className="text-sm">
                  Email
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
                  type="password"
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
          <span className="">
            <span className="text-sm">Don't have an account? </span>
            <span className="text-sm text-primary underline cursor-pointer">
              <a href="">Sign up</a>
            </span>
          </span>
        </div>
      </div>
      <div className="h-full w-[55%] bg-primary flex justify-center items-center">
        <img src="/undraw_work_chat_re_qes4.svg" alt="" className="h-[350px]" />
      </div>
    </div>
  );
};

export default LoginCard;
