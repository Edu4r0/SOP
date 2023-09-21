import { useState } from "react";
import Cards from "../data/Reports";
import printUser from "../templates/reports/User";

function Cardreports() {
  const [last, setlast] = useState(Cards);
  async function exportPDF(text, index) {
    const fecha = new Date();
    const lasgenerate = fecha.toLocaleDateString();
    const updatelaast = [...last];
    updatelaast[index].last = lasgenerate;
    setlast([...last, updatelaast]);
    printUser()
  }

  return (
    <div className="grid grid-cols-3 gap-5 my-10">
      {Cards.map((card, index) => (
        <div
          key={index}
          className={`w-5/6 hover:h-44 duration-300 relative h-40 px-2 py-5 cursor-pointer rounded-md bg-slate-700`}
        >
          <div className="bg-slate-950 w-full absolute -top-0 rounded-t-md -left-0 h-4"></div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex text-slate-50 gap-4 w-full items-center">
                <img
                  className="bg-slate-800 rounded-md px-2 py-2"
                  src={`${card.img}.png`}
                />
                <span className="font-bold ">{card.name}</span>
              </div>
              <span className="text-xs text-slate-500">{last[index].last}</span>
            </div>
            <div
              className={`bg-slate-800 rounded-md px-2 
              } flex my-2`}
            >
              <p className="text-xs text-slate-500">{card.coment}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => exportPDF(card.text, index)}
                className="border rounded-md border-red-500 px-2 hover:bg-red-500 hover:text-white text-red-400"
              >
                Exportar pdf
              </button>
            </div>
          </div>
          <div className="bg-slate-950 w-full h-4 absolute -bottom-0 -left-0 rounded-b-md"></div>
        </div>
      ))}
    </div>
  );
}

export default Cardreports;
