import React, { FC, FormEvent } from "react";

// tyes in folder typescript
import { IcheckOtp } from "../../types/interface";

//api
import { checkOtp } from "../../services/auth";

// enums
import { MESSEGESENDOTP } from "../../types/enumsPublic";

//notif || alert
import toast, { Toaster } from "react-hot-toast";
import { cookie } from "../../utils/cookies";

const CheckOtp: FC<IcheckOtp> = ({
  code,
  setCode,
  mobile,
  setMobile,
  setStep,
}) => {
  // submit handeler form
  const submitHandeler = async (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    // validation code sms
    if (code.length !== 5) return;

    const { response, error } = await checkOtp(mobile, code);

    // save token in cookie
    cookie(response?.data);

    if (response?.status == 200) {
      toast.success(MESSEGESENDOTP.WELLCOME);
    } else {
      toast.error(MESSEGESENDOTP.ERROR);
    }
  };

  return (
    <div className="flex justify-center mx-auto mt-20 rounded-lg">
      <form
        onSubmit={submitHandeler}
        className="flex flex-col items-center justify-center h-[200px] w-[600px] p-3 border-2 border-gray-300 rounded-lg"
      >
        <p className="font-bold text-right w-full">وارد کردن کد تایید</p>
        <span className="text-gray-400 mb-7 font-bold mt-3 text-md">
          کد تایید شده به شماره {mobile} را وارد کنید
        </span>
        <div className="flex gap-3 items-center">
          <label className="font-bold" htmlFor="input">
            کد تایید را وارد کنید
          </label>
          <input
            value={code}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setCode(e.target.value)
            }
            id="input"
            className="border-[1px] border-gray-500 outline-none p-1 rounded-md"
            type="text"
            placeholder="کد تایید"
          />
        </div>
        <div className="mt-5 flex gap-9">
          <button
            type="submit"
            className="bg-red-500 p-1 w-[120px] rounded-md text-white"
          >
            ارسال
          </button>
          <button
            onClick={() => setStep(1)}
            className="border-[1px] bg-gray-500 text-white p-1 rounded-md"
          >
            ویرایش شماره
          </button>
        </div>
      </form>
      <Toaster />
    </div>
  );
};

export default CheckOtp;
