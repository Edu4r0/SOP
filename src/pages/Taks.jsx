import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
function Taks() {
  const [tasks, settasks] = useState([]);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData() {
      setLoading(true)
      try {
        const response = await fetch("http://localhost:5000/api/tasksList");
        const data = await response.json();
        settasks(data);
      } catch (error) {
        console.error.message;
      }
      finally{
        setLoading(false)
      }
    }
    getData();
  }, []);

  async function postData(data) {
    try {
      const response = await fetch("http://localhost:5000/api/tasks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      
      const updatedTasks = [...tasks, data];
      settasks(updatedTasks);
      toast.success("Tarea creada");
      
    } catch (error) {
      console.log(error)
      toast.error("Error al guardar tareas " + error);
    }
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
    postData(data);
  }
  function handleComplet(index) {
    const updatecompleted = [...tasks];
    updatecompleted[index].completed = !updatecompleted[index].completed;
    settasks(updatecompleted);
  }
  return (
    <main className="bg-gray-50  dark:bg-gray-900 w-full px-5 py-5">
      <div className="flex flex-col">
        <h2 className="font-bold text-gray-900 dark:text-white text-2xl">Todo List</h2>
        <hr className="w-full my-3 border border-slate-300 dark:border-slate-600 rounded-lg mx-auto " />
        <div className="flex justify-center px-2 py-2 my-2  rounded-md shadow dark:border bg-white  dark:bg-gray-800 dark:border-gray-700">
          <form onSubmit={(e) => handleSubmit(e)} className="flex gap-5">
            <input
              className="rounded-md outline-none bg-slate-200 dark:bg-slate-600 text-gray-900 dark:text-white px-2"
              placeholder="Ingrese la tarea"
              type="text"
              autoComplete="off"
              name="text"
            />
            <input
              className="rounded-md outline-none bg-slate-200 dark:bg-slate-600 text-gray-900 dark:text-white px-2"
              type="text"
              autoComplete="off"
              name="descripcion"
              placeholder="Descripcion"
            />
            <input
              className=" bg-slate-200 dark:bg-slate-600 text-gray-900 dark:text-white text-center rounded-md"
              type="date"
              name="date"
            />
            <button className="bg-slate-300 dark:bg-slate-700 text-gray-900 dark:text-white w-20 px-2 py-1 rounded-md">
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
                className="flex flex-col  rounded-md px-2 py-2 shadow dark:border bg-white  dark:bg-gray-800 dark:border-gray-700"
                key={index}
              >
                <div className="flex justify-between">
                  <span className="h-6 w-6 bg-sky-500 rounded-full text-center">
                    {task.id}
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
                  <span>{task.task_information.name}</span>
                  <div>
                    <span className="text-slate-400">{task.task_information.descripcion}</span>
                  </div>
                  <span>{task.task_information.date}</span>
                  <div className="flex justify-end ">
                    <button>
                      <img
                        className="dark:hover:bg-slate-400 bg-slate-400 px-1 py-1 rounded-md duration-300 "
                        src="/trash-bin.png"
                        alt="trash"
                      />
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) :  (
            <div className="flex justify-center items-center my-40">
              {loading ? (
              <div className="mx-5 h-20 w-20 border-4 border-blue-700 border-r-transparent animate-spin rounded-full"></div>
            ) : (
              <div>
                <span className="text-gray-900 dark:text-white">No hay datos</span>
                <a href=""></a>
              </div>
            )}
            </div>
          )}
        </div>
      </div>
      <Toaster richColors closeButton theme="system" />
    </main>
  );
}

export default Taks;
