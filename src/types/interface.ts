import { Dispatch, SetStateAction } from "react";

interface IsentOtp {
  step: Dispatch<SetStateAction<number>>;
  setStep: Dispatch<SetStateAction<number>>;
  mobile: Dispatch<SetStateAction<string>>;
  setMobile: Dispatch<SetStateAction<string>>;
}

interface IcheckOtp {
  code: Dispatch<SetStateAction<string>>;
  setCode: Dispatch<SetStateAction<string>>;
  mobile: Dispatch<SetStateAction<string>>;
  setMobile: Dispatch<SetStateAction<string>>;
  setStep: Dispatch<SetStateAction<number>>;
}

export type { IsentOtp, IcheckOtp };
