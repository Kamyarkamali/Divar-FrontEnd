import { useState } from "react";

//components in send and check otp | phone number
import SendOtp from "../components/templates/SendOtp";
import CheckOtp from "../components/templates/CheckOtp";

export default function AuthPage() {
  const [step, setStep] = useState<number>(2);

  const [mobile, setMobile] = useState<string>("");

  const [code, setCode] = useState<string>("");

  return (
    <div>
      {step === 1 && (
        <SendOtp
          step={step}
          setStep={setStep}
          mobile={mobile}
          setMobile={setMobile}
        />
      )}
      {step === 2 && (
        <CheckOtp
          code={code}
          setCode={setCode}
          mobile={mobile}
          setMobile={setMobile}
          setStep={setStep}
        />
      )}
    </div>
  );
}
