import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { ChartContainer } from "@mui/x-charts/ChartContainer";
import { BarChart } from "@mui/x-charts/BarChart";
// const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [10, 30, 21, 15, 12, 10, 15];
const xLabels = [
  "Monday",
  "Tuesday",
  "Wed",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const services_data = [
  {
    label: "Haircut",
    value: 72.72,
  },
  {
    label: "Beard",
    value: 16.38,
  },
  {
    label: "Spa",
    value: 3.83,
  },
  {
    label: "Massage",
    value: 2.42,
  },
  {
    label: "Facial",
    value: 4.65,
  },
  {
    label: "Manicure & Pedicure",
    value: 18.65,
  },
];
export default function Reports() {
  return (
    <>
      <div className="grid grid-flow-row grid-cols-2">
        <div className="w-max">
          <Card>
            <CardHeader>
              <CardTitle>Appointments for the week</CardTitle>
            </CardHeader>
            <CardDescription className={"text-center"}>
              A Graphical representation about appointments per week
            </CardDescription>
            <CardContent>
              <BarChart
                width={500}
                height={300}
                series={[{ data: pData, label: "appointments", id: "pvId" }]}
                xAxis={[{ data: xLabels, scaleType: "band" }]}
              />
            </CardContent>
          </Card>
        </div>
        <div className="w-max">
          <Card>
            <CardHeader>
              <CardTitle>Most choosen services</CardTitle>
            </CardHeader>
            <CardDescription className={"text-center"}>
              A Graphical representation about Services choosen by customers (values are in %)
            </CardDescription>
            <CardContent>
              <PieChart
                series={[
                  {
                    data: services_data,
                    highlightScope: { fade: "global", highlight: "item" },
                    faded: {
                      innerRadius: 20,
                      additionalRadius: -30,
                      color: "gray",
                    },                    
                  },
                ]}
                height={300}
                width={600}
              />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}
