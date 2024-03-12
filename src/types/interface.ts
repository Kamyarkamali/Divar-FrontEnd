import { Dispatch, SetStateAction } from "react";

interface IsentOtp {
  step: Dispatch<SetStateAction<number>>;
  setStep: Dispatch<SetStateAction<number>>;
  mobile: Dispatch<SetStateAction<string>>;
  setMobile: Dispatch<SetStateAction<string>>;
}

export type { IsentOtp };
