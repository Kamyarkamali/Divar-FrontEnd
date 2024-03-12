import React, { FC, FormEvent } from "react";
import { IsentOtp } from "../../types/interface";
import { sendOtp } from "../../services/auth";

// enum
import { MESSEGESENDOTP } from "../../types/enumsPublic";

import toast, { Toaster } from "react-hot-toast";

const SendOtp: FC<IsentOtp> = ({ step, setStep, mobile, setMobile }) => {
  // submit handeler form
  const submitHandeler = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    // validation phone number
    if (mobile.length !== 11) return;

    // send phonne number in server
    const { response, error } = await sendOtp(mobile);

    if (response) {
      toast.success(MESSEGESENDOTP.SUCCSESS);
      setTimeout(() => {
        setStep(2);
      }, 2000);
    } else {
      console.log(error);
    }

    console.log({ response, error });
  };

  return (
    <div className="flex justify-center mx-auto mt-20 rounded-lg">
      <form
        onSubmit={submitHandeler}
        className="flex flex-col items-center justify-center h-[200px] w-[600px] p-3 border-2 border-gray-300 rounded-lg"
      >
        <p className="font-bold text-right w-full">ورود به حساب کاربری</p>
        <span className="text-gray-400 font-bold mt-3 text-sm">
          برای استفاده از امکانات دیوار لطفا شماره موبایل خود را واردکنید ,کد
          تایید به این شماره پیامک خواهد شد
        </span>
        <div className="flex gap-3 items-center">
          <label className="font-bold" htmlFor="input">
            شماره موبایل خود را وارد کنید
          </label>
          <input
            value={mobile}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setMobile(e.target.value)
            }
            id="input"
            className="border-[1px] border-gray-500 outline-none p-1 rounded-md"
            type="text"
            placeholder="شماره موبایل"
          />
        </div>
        <div className="mt-5">
          <button
            type="submit"
            className="bg-red-500 p-1 w-[120px] rounded-md text-white"
          >
            ارسال
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default SendOtp;
