import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";

function Taks() {
  const [tasks, settasks] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch("http://localhost:5000/TasksList");
        const data = await response.json();
        settasks(data);
      } catch (error) {
        console.error.message;
      }
    }
    getData();
  }, []);

  async function postData(data) {
    try {
      // eslint-disable-next-line no-unused-vars
      const response = await fetch("http://localhost:5000/Tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const updatedTasks = [...tasks, data];
        settasks(updatedTasks);
        toast.success("Tarea creada");
      } else {
        toast.error("Error al guardar tareas");
      }
    } catch (error) {
      toast.error("Error al guardar tareas ");
    }
  }
  function name(params) {
    
  }

  

  function handleSubmit(e) {
    e.preventDefault();
    const text = e.target.text.value;
    const date = e.target.date.value;
    const descripcion = e.target.descripcion.value;
    const data = {
      name: text,
      descripcion,
      date,
      completed: false,
    };
    postData(data)
  }
  function handleComplet(index) {
    const updatecompleted = [...tasks];
    updatecompleted[index].completed = !updatecompleted[index].completed;
    settasks(updatecompleted);
  }
  return (
    <main className="bg-slate-900 w-full px-5 py-5">
      <h2 className="font-bold text-white text-2xl">Todo List</h2>
      <hr className="w-full" />
      <div className="flex justify-center px-2 py-2 my-2 text-slate-100 rounded-md bg-slate-950 ">
        <form onSubmit={(e) => handleSubmit(e)} className="flex gap-5">
          <input
            className="rounded-md outline-none bg-slate-600 text-white px-2"
            placeholder="Ingese la tarea"
            type="text"
            name="text"
          />
          <input
            className="rounded-md outline-none bg-slate-600 text-white px-2"
            type="text"
            name="descripcion"
            placeholder="Descripcion"
          />
          <input
            className="bg-slate-600 text-white text-center rounded-md"
            type="date"
            name="date"
          />
          <button className="bg-slate-700 w-20 px-2 py-1 rounded-md">
            Agregar
          </button>
        </form>
      </div>
      <div
        className={`w-full grid ${
          tasks.length > 0 ? " gap-2  grid-cols-4" : "justify-center my-10"
        }`}
      >
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div
              className="flex flex-col  rounded-md px-2 py-2 text-slate-100 bg-slate-700"
              key={index}
            >
              <div className="flex justify-between">
                <span className="h-6 w-6 bg-sky-500 rounded-full text-center">
                  {index}
                </span>
                <input
                  onChange={() => handleComplet(index)}
                  className="w-6 h-6"
                  type="checkbox"
                  name=""
                  id=""
                />
              </div>
              <div
                className={`px-2 py-2 flex flex-col ${
                  tasks[index].completed
                    ? "line-through text-blue-600 duration-300"
                    : "no-underline"
                }`}
              >
                <span>{task.name}</span>
                <div>
                  <span className="text-slate-400">{task.descripcion}</span>
                </div>
                <span>{task.date}</span>
                <div className="flex justify-end">
                  <button onClick={()=>handleRemove(index)}  className="w-10 h-10 px-2 py-2 bg-red-600">
                    
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-white">No hay datos</div>
        )}
      </div>
      <Toaster richColors closeButton theme="system" />
    </main>
  );
}

export default Taks;
