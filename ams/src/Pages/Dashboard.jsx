import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Calendar, IndianRupee, PlusCircle } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Link } from "react-router-dom";
import axios from "axios";

// Define colors for pie chart segments
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"];

export default function Dashboard() {
  const [outletName, setOutletName] = useState("");
  const [totalAppointments, setTotalAppointments] = useState(0);
  const [todayRevenue, setTodayRevenue] = useState(0);
  const [appointmentStatus, setAppointmentStatus] = useState([]);

  useEffect(() => {
    // Get outlet name and ID from local storage
    const outletData = localStorage.getItem("outlet_name")||{};
    const outletId = localStorage.getItem("outlet_id")||{};
    setOutletName(outletData || "Salon Outlet");

    // Fetch today's appointment status breakdown from API
    const fetchAppointmentStatus = async () => {
      try {
       const response = await axios.get(`http://afe62695a98434d1d82d98f959376357-1478653283.us-east-1.elb.amazonaws.com/api/get-all-appointments-staff-without-filter`, {
      params: { outlet_id: outletId }  // Pass outlet_id as query param
    });
    // console.log(response)
        const allAppointments = response.data.service_appointments;
    
        // Get today's date in string format to compare
        const today = new Date().toDateString();
    
        // Filter today's appointments
        const todayAppointments = allAppointments.filter(appointment => {
          const appointmentDate = new Date(appointment.time).toDateString();
          return appointmentDate === today;
        });
    
        // Count total appointments for today
        setTotalAppointments(todayAppointments.length);
    
        // Get status breakdown
        const statusBreakdown = todayAppointments.reduce((acc, appointment) => {
          
          const status = appointment.status || 'Unknown'; 
          console.log(status)
          if (!acc[status]) acc[status] = 0;
          acc[status]++;
          return acc;
        }, {});
    
        // Convert the status breakdown to an array for the pie chart
        const statusData = Object.entries(statusBreakdown).map(([name, count]) => ({
          name,
          count
        }));
        console.log(statusData)
    
        setAppointmentStatus(statusData);
      } catch (error) {
        console.error("Error fetching appointment data:", error);
      }
    };
    

    // Fetch today's revenue - this would need to be replaced with actual logic
    const fetchTodayRevenue = async () => {
      // Mocked API call, replace with actual logic
      setTodayRevenue(1250.0);
    };

    fetchAppointmentStatus();
    fetchTodayRevenue();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">{outletName} </h1>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Appointments Today
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalAppointments}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Today's Revenue
            </CardTitle>
            <IndianRupee className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Rs.{todayRevenue.toFixed(2)}</div>
          </CardContent>
        </Card>

        <Card className="md:col-span-2 lg:col-span-1">
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="flex justify-center gap-4">
            <Link to="/book-appointment">
              <Button className="w-full">
                <PlusCircle className="mr-2 h-4 w-4" /> Book Appointment
              </Button>
            </Link>
            {/* <Button variant="outline" className="w-full">
              <Calendar className="mr-2 h-4 w-4" /> View Calendar
            </Button> */}
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Appointment Status Breakdown</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={appointmentStatus}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={80}
                fill="#8884d8"
                dataKey="count"
                label={({ name, percent }) =>
                  `${name} ${(percent * 100).toFixed(0)}%`
                }
              >
                {appointmentStatus.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
