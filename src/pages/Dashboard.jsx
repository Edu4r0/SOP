import Days from "../data/Days";
import data from "../data/LineChart";
import pieChartdata from "../data/PieChart";
import { useNavigate } from "react-router-dom";
import CardAnalytics from "../components/Card-Analytics";
import {
  LineChart,
  Line,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { useState, useEffect } from "react";
import UsersTable from "../components/UsersTable";
import fechAPI from "../data/FechApi";

function Dashboard() {
  const [datenow, setDatenow] = useState("");
  const [user, setuser] = useState("");

  const date = new Date();
  const day = date.getDay();
  const dayselect = Days.map((days) => {
    return days[day];
  });
  useEffect(() => {
    async function RequestAPI() {
      try {
        const data = await fechAPI("UsersList");
        setuser(data);
      } catch (error) {
        console.log(error);
      }
    }
    RequestAPI();
  }, []);

  useEffect(() => {
    function SetDate() {
      const date = new Date();
      const days = `${date.toLocaleDateString()} ${date.toLocaleTimeString(
        "COL",
        {
          hour12: true,
          second: undefined,
          hour: "2-digit",
          minute: "2-digit",
        }
      )}`;
      setDatenow(days);
    }
    setInterval(SetDate(), 60000);
  }, []);

  const navigate = useNavigate();

  function users() {
    navigate("/users");
  }
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <main className="bg-slate-900 w-full py-5 px-5">
      <div className="min-w-full">
        <div className="flex justify-between gap-10">
          <div className="flex justify-between px-5 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 h-44 w-1/3 rounded-md">
            <div className="flex gap-16 justify-between">
              <div className="flex flex-col justify-between">
                <div className="h-8 text-sm w-52 px-2 py-1 bg-blue-800 rounded-md shadow-md text-center text-white">
                  {datenow}
                </div>
                <div>
                  <h1 className="text-white text-2xl font-bold py-1">
                    Bienvenido, Admin
                  </h1>
                  <p className="text-white text-sm">
                    Que tengas un feliz {dayselect}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            onClick={() => {
              users();
            }}
            className="border border-slate-700 bg-slate-700 h-44 w-2/6 rounded-md flex-none overflow-y-hidden cursor-pointer text-sm"
          >
            <UsersTable className="hover:bg-black" />
          </div>
          <div className="border border-slate-700 w-1/4 h-44 py-1 bg-slate-800 rounded-md flex justify-center items-start">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieChartdata}
                  cx={150}
                  cy={80}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Pie
                  data={data}
                  cx={420}
                  cy={200}
                  startAngle={180}
                  endAngle={0}
                  innerRadius={60}
                  outerRadius={80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <hr className="my-3 border border-slate-600 rounded-lg mx-auto" />
        <div className="flex justify-between mx-auto ">
          <div className="bg-slate-800 border border-slate-700 h-32 w-1/5 rounded-md flex px-5 py-5">
            <span className="text-slate-400">Uso</span>
            <div className="w-3/4 ">
              <ResponsiveContainer>
                <LineChart width={300} height={100} data={data}>
                  <Tooltip
                    contentStyle={{ background: "transparent", border: "none" }}
                    labelStyle={{ display: "none" }}
                    position={{ x: 50, y: 50 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="pv"
                    stroke="#8884d8"
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
          <CardAnalytics
            name="Usuarios"
            image="user"
            color="bg-purple-800"
            number={user.length}
          />
          <CardAnalytics
            name="Avisos"
            image="image"
            color="bg-blue-800"
            number="2"
          />
          <CardAnalytics
            name="Encuestas"
            image="survey"
            color="bg-slate-900"
            number="1"
          />
        </div>

        <div className="border border-slate-700 my-5 bg-slate-800 h-52 w-full rounded-md">
          <ResponsiveContainer width={"98%"}>
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
                position={{ x: 1020, y: 10 }}
              />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="#6b21a8"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="#1e40af"
                strokeWidth={2}
                dot={false}
              />
              <Line
                type="monotone"
                dataKey="amt"
                stroke="#0f172a"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
