import { Button } from "@/Components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/Components/ui/input-otp";
import axios from "axios";
import React from "react";
import { useState } from "react";

function OtpverifyPage() {
  const [otp, setOtp] = useState();
  const handleSubmitOTP = async() => {
    const response = await axios.post("http://localhost:5000/verify-otp",{
      otp: otp
    })
    console.log(otp);
  };


  return (
    <>
      <InputOTP maxLength={6} value={otp} onChange={(otp) => setOtp(otp)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />

          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
      <Button onClick={handleSubmitOTP}>Verify OTP</Button>
    </>
  );
}

export default OtpverifyPage;
