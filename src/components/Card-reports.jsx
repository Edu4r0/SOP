import { useState } from "react";

function Cardreports(props) {
  const [opencoment, setopencoment] = useState(false);

  const { last, setlast, index, text, img, coment } = props;

  function exportPDF(text, index) {
    const fecha = new Date();
    const data = {
      name: text,
      fecha: fecha.toLocaleDateString(),
    };

    // Copia el estado actual last en una nueva variable
    const updatedLast = [...last];

    // Comprueba si el índice deseado es válido
    if (index >= 0 && index < updatedLast.length) {
      // Reemplaza el elemento en el índice deseado
      updatedLast[index] = data;
    } else {
      // Si el índice no es válido, agrega el elemento al final del arreglo
      updatedLast.push(data);
    }

    // Actualiza el estado con los datos actualizados
    setlast(updatedLast);
    console.log(updatedLast);
  }

  return (
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
              src={`${img}.png`}
            />
            <span className="font-bold ">{text}</span>
          </div>
          <span className="text-xs text-slate-500">{last[index]?.fecha || "-.-."} </span>
        </div>
        <div
          className={`bg-slate-800 rounded-md px-2 ${
            !opencoment ? "w-10" : "mx-auto"
          } flex my-2`}
        >
          {opencoment ? (
            <p
              onClick={() => setopencoment(!opencoment)}
              className="text-xs text-slate-500"
            >
              {coment}
            </p>
          ) : (
            <span
              onClick={() => setopencoment(!opencoment)}
              className="text-sm text-slate-500"
            >
              <strong>. . .</strong>
            </span>
          )}
        </div>
        <div className="flex justify-end">
          <button
            onClick={() => exportPDF(text, index)}
            className="border rounded-md border-red-500 px-2 text-red-400"
          >
            Exportar pdf
          </button>
        </div>
      </div>
      <div className="bg-slate-950 w-full h-4 absolute -bottom-0 -left-0 rounded-b-md"></div>
    </div>
  );
}

export default Cardreports;
