import Days from "../data/Days";
import data from "../data/LineChart";
import { LineChart, Line, Tooltip, ResponsiveContainer } from "recharts";

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
            <div className="my-28 absolute mx-5">
              <h1 className="text-white text-2xl font-bold py-1">
                Welcome, Admin
              </h1>
              <p className="text-white text-sm">Have a Nice {dayselect}</p>
            </div>
            <img
              className="relative h-48 bottom-5 "
              src="src/assets/undraw_welcoming.svg"
              alt=""
            />
          </div>
          <div className="bg-slate-700 h-44 w-2/5 rounded-md"></div>
        </div>
      
      <hr className="my-3 border border-slate-600 rounded-lg mx-auto" />
        <div className="flex justify-around  mx-auto ">
          <div className="bg-slate-800 h-32 w-1/5 rounded-md flex py-5 px-5">
           <span className="text-slate-400">Uso</span>
            <div className="w-3/4 ">
              <ResponsiveContainer>
                <LineChart
                  width={300}
                  height={100}
                  data={data}
                >
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
          <div className="bg-slate-800 h-32 w-1/5 rounded-md px-5 py-5 flex justify-between text-right">
            <span className="h-12 w-2 bg-purple-800 rounded-md"></span>
            <div className="flex flex-col text-left">
            <span className="text-slate-400">Usuarios</span>
            <span className="text-3xl font-bold text-white">25</span>
            </div>
            <div className="bg-slate-700 h-10 w-10 rounded-md px-2 py-2  ">
              <img src="src/assets/user-group.png" alt="" />
            </div>
          </div>
          <div className="bg-slate-800 h-32 w-1/5 rounded-md"></div>
          <div className="bg-slate-800 h-32 w-1/5 rounded-md"></div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
