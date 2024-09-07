import { Button } from "@/Components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/Components/ui/input-otp";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

function OtpverifyPage() {
  const [otp, setOtp] = useState("");
  const [inputOtp,setInputOtp]=useState("");
  const handleSubmitOTP = async() => {
    if (inputOtp == otp) {
      console.log("This is correct OTP");      
      const response = await axios.post("http://localhost:5000/api/verify-otp",{otp:Number(inputOtp)},{
        headers:{
          'Content-Type':'application/json',
        }
      })
      const data = response.data;
      console.log(data);
      localStorage.setItem('token',data.token)
      setTimeout(()=>{
        localStorage.removeItem("OTP")
      },120000)   
    }
    else alert("Invalid OTP");
  };
  
  useEffect(()=>{
    console.log(localStorage.getItem("OTP"));
    setOtp(localStorage.getItem('OTP'));
  })

  return (
    <>
      <InputOTP maxLength={6} value={inputOtp} onChange={(inputOtp) => setInputOtp(inputOtp)}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          {/* <InputOTPSeparator/> */}
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
