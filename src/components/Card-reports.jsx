import { useState } from "react";
import Cards from "../data/Reports";
import printUser from "../templates/reports/User";
import printSurvey from "../templates/reports/Survey";
import printTask from "../templates/reports/Task";
import printWarnings from "../templates/reports/Warning";

function Cardreports(props) {
  
  const [last, setlast] = useState(Cards);
  async function exportPDF(card, index) {
    const fecha = new Date();
    const lasgenerate = fecha.toLocaleDateString();
    const updatelaast = [...last];
    updatelaast[index].last = lasgenerate;
    setlast([...last, updatelaast]);
    let reportTemplate;
  switch (card.type) {
    case "user":
      reportTemplate = printUser;
      break;
    case "survey":
      reportTemplate = printSurvey;
      break;
    case "task":
      reportTemplate = printTask;
      break;
    case "warning":
      reportTemplate = printWarnings;
      break  
    default:
      console.error(`Unknown report type: ${card.type}`);
      return;
  }
  // Generate the report using the selected template
  // eslint-disable-next-line react/prop-types
  props.toast.loading('Generando...')
  reportTemplate(card.data);
}
  
  return (
    <div className="grid grid-cols-3 gap-5 my-10">
      {Cards.map((card, index) => (
        <div
          key={index}
          className={`w-5/6 hover:h-48 duration-300 overflow-hidden relative h-40 px-2 py-5 cursor-pointer rounded-md shadow dark:border bg-white  dark:bg-gray-800 dark:border-gray-700`}
        >
          <div className="bg-slate-950  w-full absolute -top-0 rounded-t-md -left-0 h-4"></div>
          <div className="flex flex-col">
            <div className="flex">
              <div className="flex dark:text-slate-50 text-gray-900 gap-4 w-full items-center">
                <img
                  className="dark:bg-slate-600 bg-slate-800 rounded-md px-2 py-2"
                  src={`${card.img}.png`}
                />
                <span className="font-bold ">{card.name}</span>
              </div>
              <span className="text-xs text-slate-500">{last[index].last}</span>
            </div>
            <div
              className={`dark:bg-slate-600 bg-slate-200 rounded-md px-2 py-2
              } flex my-2`}
            >
              <p className="text-xs dark:text-slate-200 text-gray-900">{card.coment}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => exportPDF(card, index)}
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
