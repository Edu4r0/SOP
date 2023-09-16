import Cardreports from "../components/Card-reports";
import { useState } from "react";
function Reports() {
  const [last, setlast] = useState([]);

  return (
    <main className="w-full bg-slate-900 px-5 py-5">
      <h2 className="text-2xl text-white ">Reportes</h2>
      <hr />
      <div className="grid grid-cols-3 gap-5 my-10">
        <Cardreports last={last} index="0" setlast={setlast}  text="Uso" />
        <Cardreports last={last} index="1" setlast={setlast}  coment="Informe de usuarios en el sistema con informacion como : status,puntuacion y ultima ejecucion" img="user" text="Usuarios" />
        <Cardreports last={last} index="2" setlast={setlast}  text="" />
        <Cardreports last={last} index="3" setlast={setlast}  text="" />
        <Cardreports last={last} index="4" setlast={setlast}  text="" />
        <Cardreports last={last} index="5" setlast={setlast}  text="Log" />
      </div>
    </main>
  );
}

export default Reports;
