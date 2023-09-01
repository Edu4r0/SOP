import Days from "../data/Days";
import data from "../data/LineChart";
import CardAnalytics from "../components/Card-Analytics";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";
import UsersTable from "../components/UsersTable";

function Dashboard() {
  const date = new Date();
  const day = date.getDay();
  const dayselect = Days.map((days) => {
    return days[day];
  });

  return (
    <main className="bg-slate-900 w-full">
      <div className="py-5">
        <div className="flex justify-around">
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
              src="src/assets/undraw_welcoming.svg"
              alt=""
            />
          </div>
          <div className="bg-slate-700 h-44 w-2/5 rounded-md flex-none overflow-y-hidden ">
            <a href="\users">
              <UsersTable />
            </a>
          </div>
        </div>

        <hr className="my-3 border border-slate-600 rounded-lg mx-auto" />
        <div className="flex justify-around  mx-auto ">
          <div className="bg-slate-800 h-32 w-1/5 rounded-md flex py-5 px-5">
            <span className="text-slate-400">Uso</span>
            <div className="w-3/4 ">
              <ResponsiveContainer>
                <LineChart width={300} height={100} data={data}>
                  <Tooltip />
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
            image="users"
            color="bg-purple-800"
            number="25"
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
            number="12"
          />
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
