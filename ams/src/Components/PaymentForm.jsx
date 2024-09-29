import React, { useState } from "react";
// import { Box } from "@radix-ui/themes";

// function PaymentForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     service: "",
//     time: "",
//     outlet: "",
//     package: "",
//     staffName: "",
//     modeOfPayment: "Cash", // assuming default value
//     totalAmount: 800, // assuming default value
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = () => {
//     // Submit logic here
//   };

//   return (
//     <div className="container">
//       <form>
//         <div className="flex">
//           <div className="flex py-5">
//             <h1 className="px-2">Name:-</h1>
//             <input
//               type="text"
//               name="name"
//               placeholder="Name"
//               onChange={handleInputChange}
//             />
//           </div>
//           {/* <select name="outlet" onChange={handleInputChange}>
//         {/* Options go here }
//       </select> */}
//           <div className="flex">
//             <h1 className="px-2">Service:-</h1>
//             <input
//               type="text"
//               name="service"
//               placeholder="Service"
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         <select name="package" onChange={handleInputChange}>
//           {/* Options go here */}
//         </select>
//         <input
//           type="text"
//           name="time"
//           placeholder="Time"
//           onChange={handleInputChange}
//         />
//         {/* Clock icon interaction would be handled separately */}
//         <input
//           type="text"
//           name="staffName"
//           placeholder="Staff Name"
//           onChange={handleInputChange}
//         />

//         <div className="py-9">
//           Mode of Payment:
//           <label className="px-3">
//             <input
//               type="radio"
//               name="modeOfPayment"
//               value="Cash"
//               checked={formData.modeOfPayment === "Cash"}
//               onChange={handleInputChange}
//             />
//             Cash
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="modeOfPayment"
//               value="Online"
//               checked={formData.modeOfPayment === "Online"}
//               onChange={handleInputChange}
//             />
//             Online
//           </label>
//         </div>

//         <div className="">Total amount: {formData.totalAmount} /-</div>

//         <button
//           className="three bg-blue-500 rounded-lg float-right px-3 "
//           onClick={handleSubmit}
//         >
//           Save
//         </button>
//       </form>

//       <Box maxWidth="350px">
//         <Card asChild>
//           <a href="#">
//             <Text as="div" size="2" weight="bold">
//               Quick start
//             </Text>
//             <Text as="div" color="gray" size="2">
//               Start building your next project in minutes
//             </Text>
//           </a>
//         </Card>
//       </Box>
//     </div>
//   );
// }

// export default PaymentForm;

//import * as React from 'react';
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Input from "@mui/material/Input";
//import { styled } from '@mui/material/styles';
import { TextField } from "@mui/material";
import { Stack } from "@mui/material";
import { styled } from "@mui/material/styles";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export default function PaymentForm() {
  const Div = styled("div")(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }));

  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <div>
            {/* <Typography
              variant="h5"
              gutterBottom
              sx={{ color: "text.secondary", fontSize: 14 }}
            >
              Name
            </Typography> */}
            <div>
              <Div>{"Name"}</Div>
              <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                  <TextField label="Name" size="small" color="primary" />
                </Stack>
              </Stack>
            </div>

            <div>
              <Div>{"Outlet"}</Div>
              <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                  <TextField label="select" size="small" color="primary" />
                </Stack>
              </Stack>
            </div>

            <div>
              <Div>{"Service"}</Div>
              <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                  <TextField label="select" size="small" color="primary" />
                </Stack>
              </Stack>
            </div>


            <div>
              <Div>{"Service"}</Div>
              <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                  <TextField label="select" size="small" color="primary" />
                </Stack>
              </Stack>
            </div>


            <div>
              <Div>{"Time"}</Div>
              <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                  <TextField label="select" size="small" color="primary" />
                </Stack>
              </Stack>
            </div>


            <div>
              <Div>{"Staff name"}</Div>
              <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                  <TextField label="select" size="small" color="primary" />
                </Stack>
              </Stack>
            </div>


            <Div>{"Mode of payment"}</Div>

            <div>
              <Div>{"Cash"}</Div>
              <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                  <TextField label="select" size="small" color="primary" />
                </Stack>
              </Stack>
            </div>

            <div>
              <Div>{"Online or offline"}</Div>
              <Stack spacing={4}>
                <Stack direction="row" spacing={2}>
                  <TextField label="select" size="small" color="primary" />
                </Stack>
              </Stack>
            </div>
          </div>
          {/* <Input placeholder="Placeholder" inputProps={ariaLabel} /> */}
        </CardContent>
      </Card>
    </div>
  );
}
