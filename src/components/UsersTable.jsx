import { useState, useEffect } from "react";
import fechAPI from "../data/FechApi";

function UsersTable() {
  const [DataUser, setDataUser] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setloading(true);
        const data = await fechAPI('usersList');
        setDataUser(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setloading(false);
      }
    }

    fetchData();
  }, []);
  return (
    <div className="relative overflow-x-auto shadow  bg-white  dark:bg-gray-800  sm:rounded-tl-md rounded-tr-md">
      <table className="min-w-full">
        <thead className="uppercase text-sm text-gray-900 bg-slate-200 dark:text-slate-400 dark:bg-slate-950 text-center">
          <tr>
            <th>id</th>
            <th>nombre</th>
            <th >ultimo contacto</th>
            <th>status</th>
            <th>puntos</th>
          </tr>
        </thead>
        <tbody className="dark:text-white text-gray-900 text-center">
          {DataUser.length > 0 ? (
            DataUser.map((user) => (
              <tr
                className="border-b dark:bg-gray-800 dark:border-gray-700"
                key={user.name}
              >
                <td> {user.id}</td>
                <td>{user.name}</td>
                <td>{user.last}</td>
                <td className="flex my-2 justify-center items-center">
                  {user.status == true ? (
                    <span className="inline-flex items-center bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-green-900 dark:text-green-300">
                      <span className="w-2 h-2 mr-1 bg-green-500 rounded-full"></span>
                      Online
                    </span>
                  ) : (
                    <span className="inline-flex items-center bg-red-100 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-red-900 dark:text-red-300">
                      <span className="w-2 h-2 mr-1 bg-red-500 rounded-full"></span>
                      Offline
                    </span>
                  )}
                </td>
                <td>
                  {user.points}
                </td>
              </tr>
            ))
          ) : (
            <tr className="h-40">
              <td colSpan={4}>
                <div className="flex justify-center items-center">
                  {loading ? (
                    <div className="mx-5 h-10 w-10 border-4 border-blue-700 border-r-transparent animate-spin rounded-full"></div>
                  ) : (
                    <div>
                      <span className="text-gray-900 dark:text-white">No hay datos</span>
                      <a href=""></a>
                    </div>
                  )}
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
