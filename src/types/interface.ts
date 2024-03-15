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

interface Ichildren {
  children: JSX.Element;
}

interface Datas {
  datas: JSX.Element;
}

interface Isate {
  name: string;
  icon: string;
  slug: string;
}

export type { IsentOtp, IcheckOtp, Ichildren, Isate, Datas };
