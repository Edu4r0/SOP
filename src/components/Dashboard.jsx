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
      <div className="flex place-content-between gap-10 px-5 py-5">
        <div className="flex justify-between bg-slate-700 h-44 w-1/2 rounded-md">
          <div className="h-8 w-52 mx-5 my-3 bg-blue-800 rounded-md shadow-md text-white"></div>
          <div className="my-28 absolute mx-5">
            <h1 className="text-white text-2xl font-bold py-1">
              Welcome, Admin
            </h1>
            <p className="text-gray-500 text-sm">Have a Nice {dayselect}</p>
          </div>
          <img
            className="relative h-48 bottom-5 "
            src="src/assets/undraw_welcoming.svg"
            alt=""
          />
        </div>
        <div className="bg-slate-700 h-44 w-14"></div>
      </div>

      <div className="flex place-content-around gap-20 mx-auto py-5 ">
        <div className="bg-slate-800 h-32 w-60 rounded-md flex">
          resum
          <div className="w-full px-2 py-2">
          <ResponsiveContainer>
          <LineChart className="flex-1" width={300} height={100} data={data}>
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
        <div className="bg-slate-800 h-32 w-60 rounded-md"></div>
        <div className="bg-slate-800 h-32 w-60 rounded-md"></div>
      </div>
    </main>
  );
}

export default Dashboard;
