// import React, { useState } from "react";
// // import { Box } from "@radix-ui/themes";

// // function PaymentForm() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     service: "",
// //     time: "",
// //     outlet: "",
// //     package: "",
// //     staffName: "",
// //     modeOfPayment: "Cash", // assuming default value
// //     totalAmount: 800, // assuming default value
// //   });

// //   const handleInputChange = (e) => {
// //     const { name, value } = e.target;
// //     setFormData((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }));
// //   };

// //   const handleSubmit = () => {
// //     // Submit logic here
// //   };

// //   return (
// //     <div className="container">
// //       <form>
// //         <div className="flex">
// //           <div className="flex py-5">
// //             <h1 className="px-2">Name:-</h1>
// //             <input
// //               type="text"
// //               name="name"
// //               placeholder="Name"
// //               onChange={handleInputChange}
// //             />
// //           </div>
// //           {/* <select name="outlet" onChange={handleInputChange}>
// //         {/* Options go here }
// //       </select> */}
// //           <div className="flex">
// //             <h1 className="px-2">Service:-</h1>
// //             <input
// //               type="text"
// //               name="service"
// //               placeholder="Service"
// //               onChange={handleInputChange}
// //             />
// //           </div>
// //         </div>
// //         <select name="package" onChange={handleInputChange}>
// //           {/* Options go here */}
// //         </select>
// //         <input
// //           type="text"
// //           name="time"
// //           placeholder="Time"
// //           onChange={handleInputChange}
// //         />
// //         {/* Clock icon interaction would be handled separately */}
// //         <input
// //           type="text"
// //           name="staffName"
// //           placeholder="Staff Name"
// //           onChange={handleInputChange}
// //         />

// //         <div className="py-9">
// //           Mode of Payment:
// //           <label className="px-3">
// //             <input
// //               type="radio"
// //               name="modeOfPayment"
// //               value="Cash"
// //               checked={formData.modeOfPayment === "Cash"}
// //               onChange={handleInputChange}
// //             />
// //             Cash
// //           </label>
// //           <label>
// //             <input
// //               type="radio"
// //               name="modeOfPayment"
// //               value="Online"
// //               checked={formData.modeOfPayment === "Online"}
// //               onChange={handleInputChange}
// //             />
// //             Online
// //           </label>
// //         </div>

// //         <div className="">Total amount: {formData.totalAmount} /-</div>

// //         <button
// //           className="three bg-blue-500 rounded-lg float-right px-3 "
// //           onClick={handleSubmit}
// //         >
// //           Save
// //         </button>
// //       </form>

// //       <Box maxWidth="350px">
// //         <Card asChild>
// //           <a href="#">
// //             <Text as="div" size="2" weight="bold">
// //               Quick start
// //             </Text>
// //             <Text as="div" color="gray" size="2">
// //               Start building your next project in minutes
// //             </Text>
// //           </a>
// //         </Card>
// //       </Box>
// //     </div>
// //   );
// // }

// // export default PaymentForm;

// //import * as React from 'react';
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import CardActions from "@mui/material/CardActions";
// import CardContent from "@mui/material/CardContent";
// import Button from "@mui/material/Button";
// import Typography from "@mui/material/Typography";
// import Input from "@mui/material/Input";
// //import { styled } from '@mui/material/styles';
// import { TextField } from "@mui/material";
// import { Stack } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { DatePicker, TimePicker, DateTimePicker } from "@mui/x-date-pickers";
// import { Autocomplete } from "@mui/material";
// // import { Grid } from "@mui/material";
// import Grid from '@mui/material/Grid';


// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

// // for autocomplete line number 214 of package
// const packages = ["Beard", "Moustache"];
// const outlets = [
//   "Juhu",
//   "Andheri",
//   "Bandra",
//   "Mulund",
//   "Dombivali",
//   "Borivali",
//   "Kalyan",
// ];

// export default function PaymentForm() {
//   const Div = styled("div")(({ theme }) => ({
//     ...theme.typography.button,
//     backgroundColor: theme.palette.background.paper,
//     padding: theme.spacing(1),
//   }));

//   const [selectedDate, setSelectedDate] = useState(null);
//   const [selectedTime, setSelectedTime] = useState(null);
//   const [selectedDateTime, setSelectedDateTime] = useState(null);

//   return (
//     <div>
//       <Card sx={{ minWidth: 150 }}>
//         <CardContent>
//           <Box
//             sx={{
//               height: "100vh", // Full viewport height
//               display: "flex",
//               justifyContent: "center", // Horizontally center
//               alignItems: "center", // Vertically center
//               width: '6', // Adjust width to match your screenshot size
//               backgroundColor: 'white', // You can change to match theme
//               borderRadius: 8, // Rounded corners like in the second screenshot
//               boxShadow: 3, 
//             }}
//           >
//             <div>
//               {/* <Box
//                 component="form"
//                 sx={{
//                   display: "flex",
//                   gap: 8, // spacing between fields
//                   alignItems: "center",
//                   width: "500px",
//                   p: 3, // Padding for inner content
//                 }}
//               >
//                 <div>
//                   <Div>{"Name"}</Div>
//                   <Stack spacing={4}>
//                     <Stack direction="row" spacing={2}>
//                       <TextField label="Name" size="medium" color="primary" />
//                     </Stack>
//                   </Stack>
//                 </div>

//                 <div>
//                   <Div>{"Outlet"}</Div>
//                   <Autocomplete
//                     options={outlets}
//                     sx={{ width: 220 }}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Outlets"
//                         sx={{ height: 60 }}
//                         size="medium"
//                       />
//                     )}
//                   />
//                 </div>
//               </Box> */}
//               <Box
//                 component="form"
//                 sx={{
//                   width: "500px",
//                   p: 3, // Padding for the form
//                 }}
//               >
//                 <Grid container spacing={4}>
//                   {" "}
//                   {/* This will control the spacing between columns */}
//                   <Grid item xs={6}>
//                     {" "}
//                     {/* Each div gets a Grid item */}
//                     <Div>{"Name"}</Div>
//                     <Stack spacing={4}>
//                       <TextField label="Name" size="medium" color="primary" />
//                     </Stack>
//                   </Grid>
//                   <Grid item xs={6}>
//                     {" "}
//                     {/* Second div */}
//                     <Div>{"Outlet"}</Div>
//                     <Stack spacing={4}>
//                       <Autocomplete
//                         options={outlets}
//                         sx={{ width: 220 }}
//                         renderInput={(params) => (
//                           <TextField
//                             {...params}
//                             label="Outlets"
//                             size="medium"
//                           />
//                         )}
//                       />
//                     </Stack>
//                   </Grid>
//                 </Grid>
//               </Box>

//               <Box
//                 component="form"
//                 sx={{
//                   display: "flex",
//                   gap: 8, // spacing between fields
//                   alignItems: "center",
//                 }}
//               >
//                 <div>
//                   <Div>{"Service"}</Div>
//                   <Stack spacing={4}>
//                     <Stack direction="row" spacing={2}>
//                       <TextField label="select" size="medium" color="primary" />
//                     </Stack>
//                   </Stack>
//                 </div>

//                 <div>
//                   <Div>{"Package"}</Div>
//                   <Autocomplete
//                     options={packages}
//                     sx={{ width: 220 }}
//                     renderInput={(params) => (
//                       <TextField
//                         {...params}
//                         label="Packages"
//                         sx={{ height: 60 }}
//                         size="medium"
//                       />
//                     )}
//                   />
//                 </div>
//               </Box>

//               <Box
//                 component="form"
//                 sx={{
//                   display: "flex",
//                   gap: 8, // spacing between fields
//                   alignItems: "center",
//                 }}
//               >
//                 <div>
//                   <Div>{"Time"}</Div>
//                   <TimePicker
//                     label="Time Picker"
//                     value={selectedTime}
//                     onChange={(newValue) => {
//                       setSelectedTime(newValue);
//                     }}
//                     renderInput={(params) => <TextField {...params} />}
//                   />
//                 </div>
//                 {/* </Box> */}

//                 <div>
//                   <Div>{"Staff name"}</Div>
//                   <Stack spacing={4}>
//                     <Stack direction="row" spacing={2}>
//                       <TextField label="select" size="medium" color="primary" />
//                     </Stack>
//                   </Stack>
//                 </div>
//               </Box>

//               <Div>{"Mode of payment"}</Div>

//               <Box
//                 component="form"
//                 sx={{
//                   display: "flex",
//                   gap: 8, // spacing between fields
//                   alignItems: "center",
//                 }}
//               >
//                 <div>
//                   <Div>{"Cash"}</Div>
//                   <Stack spacing={4}>
//                     <Stack direction="row" spacing={2}>
//                       <TextField label="select" size="medium" color="primary" />
//                     </Stack>
//                   </Stack>
//                 </div>

//                 <div>
//                   <Div>{"Online or offline"}</Div>
//                   <Stack spacing={4}>
//                     <Stack direction="row" spacing={2}>
//                       <TextField label="select" size="medium" color="primary" />
//                     </Stack>
//                   </Stack>
//                 </div>
//               </Box>
//             </div>
//             {/* <Input placeholder="Placeholder" inputProps={ariaLabel} /> */}

//             {/*the date and time picker */}
//             {/* <DatePicker
//         label="Date Picker"
//         value={selectedDate}
//         onChange={(newValue) => {
//           setSelectedDate(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//       <TimePicker
//         label="Time Picker"
//         value={selectedTime}
//         onChange={(newValue) => {
//           setSelectedTime(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       />
//       <DateTimePicker
//         label="Date Time Picker"
//         value={selectedDateTime}
//         onChange={(newValue) => {
//           setSelectedDateTime(newValue);
//         }}
//         renderInput={(params) => <TextField {...params} />}
//       /> */}
//           </Box>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }










































import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from '@mui/material/Grid';
import { styled } from "@mui/material/styles";
import { TimePicker } from "@mui/x-date-pickers";

const packages = ["Beard", "Moustache"];
const outlets = [
  "Juhu",
  "Andheri",
  "Bandra",
  "Mulund",
  "Dombivali",
  "Borivali",
  "Kalyan",
];

const Div = styled("div")(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(1),
  marginBottom: theme.spacing(2),
  textAlign: "left", // Align labels to the left
}));

export default function PaymentForm() {
  const [selectedTime, setSelectedTime] = useState(null);

  return (
    <div>
      <Card sx={{ minWidth: 275, boxShadow: 5, borderRadius: 3 }}>
        <CardContent>
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              margin: "0 auto", // Center the card
              padding: 3,
              backgroundColor: "#f7f9fc", // Light background color for form
              borderRadius: 4,
            }}
          >
            <Typography variant="h5" align="center" gutterBottom>
              Payment Form
            </Typography>

            <Grid container spacing={3}>
              {/* Name Input */}
              <Grid item xs={12} sm={6}>
                <Div>Name</Div>
                <TextField fullWidth label="Name" size="medium" />
              </Grid>

              {/* Outlet Input */}
              <Grid item xs={12} sm={6}>
                <Div>Outlet</Div>
                <Autocomplete
                  options={outlets}
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} label="Outlets" size="medium" />
                  )}
                />
              </Grid>

              {/* Service Input */}
              <Grid item xs={12} sm={6}>
                <Div>Service</Div>
                <TextField fullWidth label="Service" size="medium" />
              </Grid>

              {/* Package Input */}
              <Grid item xs={12} sm={6}>
                <Div>Package</Div>
                <Autocomplete
                  options={packages}
                  fullWidth
                  renderInput={(params) => (
                    <TextField {...params} label="Packages" size="medium" />
                  )}
                />
              </Grid>

              {/* Time Picker */}
              <Grid item xs={12} sm={6}>
                <Div>Time</Div>
                <TimePicker
                  label="Time Picker"
                  value={selectedTime}
                  onChange={(newValue) => setSelectedTime(newValue)}
                  renderInput={(params) => <TextField fullWidth {...params} />}
                />
              </Grid>

              {/* Staff Name */}
              <Grid item xs={12} sm={6}>
                <Div>Staff Name</Div>
                <TextField fullWidth label="Staff Name" size="medium" />
              </Grid>

              {/* Mode of Payment */}
              <Grid item xs={12}>
                <Div>Mode of Payment</Div>
                <Stack direction="row" spacing={2}>
                  <Button variant="contained" color="primary">
                    Cash
                  </Button>
                  <Button variant="outlined" color="primary">
                    Online
                  </Button>
                </Stack>
              </Grid>

              {/* Total Amount */}
              <Grid item xs={12}>
                <Typography variant="h6">
                  Total Amount: 800 /-
                </Typography>
              </Grid>

              {/* Submit Button */}
              <Grid item xs={12}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  fullWidth
                >
                  Save
                </Button>
              </Grid>
            </Grid>
          </Box>
        </CardContent>
      </Card>
    </div>
  );
}
