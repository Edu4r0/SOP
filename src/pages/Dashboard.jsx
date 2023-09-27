import Days from "../data/Days";
import data from "../data/LineChart";
import { useNavigate } from "react-router-dom";
import CardAnalytics from "../components/Card-Analytics";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import { useState, useEffect } from "react";
import UsersTable from "../components/UsersTable";

function Dashboard() {
  const [user, setuser] = useState([]);
  const date = new Date();
  const day = date.getDay();
  const dayselect = Days.map((days) => {
    return days[day];
  });
  useEffect(() => {
    async function fechAPI() {
      try {
        const response = await fetch("http://localhost:5000/UsersList");
        const data = await response.json();
        setuser(data);
      } catch (error) {
        console.error(error);
      }
    }
    fechAPI();
  }, []);

  const navigate = useNavigate();

  function users() {
    navigate("/users");
  }

  return (
    <main className="bg-slate-900 w-full py-5 px-5">
      <div className="flex justify-between">
        <div className="flex justify-between bg-gradient-to-r from-cyan-500 to-blue-500 h-44 w-1/2 rounded-md">
          <div className="h-8 w-52 mx-5 my-3 bg-blue-800 rounded-md shadow-md text-white"></div>
          <div className="my-24 absolute mx-5 ">
            <h1 className="text-white text-2xl font-bold py-1">
              Bienvenido, Admin
            </h1>
            <p className="text-white text-sm">
              Que tengas un feliz {dayselect}
            </p>
          </div>
          <img
            className="relative h-48 bottom-5 "
            src="/undraw_welcoming.svg"
            alt=""
          />
        </div>
        <div
          onClick={() => {
            users();
          }}
          className="bg-slate-700 h-44 w-2/5 rounded-md flex-none overflow-y-hidden cursor-pointer text-sm"
        >
          <UsersTable className="hover:bg-black" />
        </div>
      </div>

      <hr className="my-3 border border-slate-600 rounded-lg mx-auto" />
      <div className="flex justify-between mx-auto ">
        <div className="bg-slate-800  h-32 w-1/5 rounded-md flex py-5 px-5">
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
                  stroke="#030712"
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
          color="bg-purple-500"
          number={user.length}
        />
        <CardAnalytics
          name="Avisos"
          image="image"
          color="bg-yellow-500"
          number="2"
        />
        <CardAnalytics
          name="Encuestas"
          image="survey"
          color="bg-blue-500"
          number="1"
        />
      </div>

      <div className="my-5 bg-slate-800 h-1/3 rounded-md">
        <ResponsiveContainer>
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
              position={{ x: 1020, y: 0 }}
            />
            <Line
              type="monotone"
              dataKey="pv"
              stroke="#a855f7"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="uv"
              stroke="#eab308"
              strokeWidth={2}
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="amt"
              stroke="#3b82f6"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}

export default Dashboard;
