import { useState, useEffect } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Calendar, DollarSign, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

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
    setOutletName(outletData || "Salon Outlet");

    // Fetch today's appointment status breakdown from API
    const fetchAppointmentStatus = async () => {
      try {
        const response = await fetch(
          `/api/appointments/today?outlet_id=${outletData.outlet_id}`
        );
        const data = await response.json();
        setAppointmentStatus(data.statusBreakdown);
        const total = data.statusBreakdown.reduce(
          (sum, item) => sum + item.count,
          0
        );
        setTotalAppointments(total);
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
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${todayRevenue.toFixed(2)}</div>
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
