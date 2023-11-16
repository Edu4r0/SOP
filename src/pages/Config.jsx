import ThemeSwitcher from "../code/Config/theme-mode";
import fechAPI from "../data/FechApi";
import { useEffect, useState } from "react";

function Config() {
  const [config, setconfig] = useState([])
  const [users, setusers] = useState([]);
  const [usersexclude, setusersexclude] = useState([{ name: "admin-root" }]);
  const [usersselect, setUsersselect] = useState("");

  function handleSelect(e) {
    setUsersselect(e.target.value);
  }

  function handleRemove(index_user) {
    const updatedUsersExclude = usersexclude.filter((user, index) => index !== index_user);
    setusersexclude(updatedUsersExclude);
    
  }

  async function  handleSubmit(e) {
    e.preventDefault();
    const user = users.filter((one) => one.name == usersselect);
    user.length > 0 ? setusersexclude([...usersexclude, user[0]]) : null;
    try {
      const response = await fetch(`http://localhost:5000/api/v1/create/exclude?name=${usersselect}`, {
        method : 'POST'
      })
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const data_users_exclude = await fechAPI("usersList/exclude")
        const data_users = await fechAPI("usersList");
        setusersexclude(data_users_exclude)
        setusers(data_users);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, []);

  

  return (
    <main className="bg-gray-50   dark:bg-gray-900 w-full px-5 py-5">
      <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
        Configuracion
      </h2>
      <hr className="my-3 border border-slate-300 dark:border-slate-600 rounded-lg mx-auto" />
      <section className="grid  grid-cols-2 gap-2">
        {/* Theme */}
        <div className="rounded-md px-5 py-5 shadow dark:border bg-white  dark:bg-gray-800 dark:border-gray-700 w-full h-72">
          <span className="text-lg font-bold">Personalización</span>
          <br />
          <span className="text-gray-600 font-bold my-2 dark:text-white">
            Tema
          </span>
          <div className="flex text-gray-600 justify-between">
            Claro || Oscuro
            <label className="relative inline-flex items-center cursor-pointer">
              <ThemeSwitcher />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 "></div>
            </label>
          </div>
          <hr className="my-3 border border-slate-300 dark:border-slate-600 rounded-lg mx-auto" />
        </div>

        {/* Except Users*/}

        <div className="rounded-md  flex flex-col  px-5 py-5 shadow dark:border bg-white  dark:bg-gray-800 dark:border-gray-700 w-full h-72">
          <span className="text-lg font-bold dark:text-slate-50 text-gray-900">Excluir Usuarios</span>
          <div className="flex-col h-full justify-between">
            <div className="relative my-2 h-40  overflow-x-hidden shadow  bg-white  dark:bg-gray-800  sm:rounded-tl-md rounded-tr-md">
              <table className="min-w-full ">
                <thead className="text-sm  text-gray-900 bg-slate-200 dark:text-slate-400 dark:bg-slate-950 text-center">
                  <tr>
                    <th>ID</th>
                    <th>NOMBRE</th>
                    <th>STATUS</th>
                    <th>-:- </th>
                  </tr>
                </thead>
                <tbody className="dark:text-white text-gray-900  text-center">
                  {usersexclude?.map((user, index) => (
                    <tr key={index} className="fade-in border-b dark:bg-gray-800 dark:border-gray-700">
                      <td>{index}</td>
                      <td>{user.name}</td>
                      <td>
                        <div className="px-2 py-1">
                        <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                          <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                          Offline
                        </span>
                        </div>
                      </td>
                      <td>
                        <div>
                          <button onClick={()=> handleRemove(index)} className="px-5 py- rounded-md bg-red-500">
                            x
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="my-3 border border-slate-300 dark:border-slate-600 rounded-lg mx-auto" />

            <form
              className="flex justify-between gap-14"
              onSubmit={(e) => handleSubmit(e)}
            >
              <select
                className="focus:outline-none h-8 dark:text-gray-100 text-gray-900 border rounded-md px-2 bg-gray-50 dark:border-none dark:bg-slate-600 border-gray-300"
                name="option_select"
                placeholder="Select users"
                id="option_select"
                onChange={(e) => handleSelect(e)}
              >
                <option defaultValue={true} value="" name="none">
                  Selecione un usuario
                </option>
                {users.map((user, index) => (
                  <option key={index}>{user.name}</option>
                ))}
              </select>
              <button className="bg-blue-600 dark:bg-blue-800 hover:bg-blue-500 text-gray-900 dark:text-slate-50 px-12 rounded-md">
                Añadir
              </button>
            </form>
          </div>
        </div>
        <div className="rounded-md px-5 py-5 shadow dark:border bg-white  dark:bg-gray-800 dark:border-gray-700 w-full h-72"></div>
        <div className="rounded-md px-5 py-5 shadow dark:border bg-white  dark:bg-gray-800 dark:border-gray-700 w-full h-72"></div>
      </section>
      <div className="-bottom-1.5  right-10 z-10 absolute">
        <button className="px-5 py-2 my-2 rounded-md bg-blue-800 text-white">
          Guardar
        </button>
      </div>
    </main>
  );
}

export default Config;
