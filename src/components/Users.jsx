import { useState } from "react";

function Users() {
  const [DataUser, setDataUser] = useState([]);

  function User() {
    // eslint-disable-next-line no-unused-vars
    const response = fetch("http://localhost:5000/UsersList")
      .then((response) => response.json())
      .then((data) => setDataUser(data));
  }

  const FilterUser = DataUser.map((data) => console.log(data));

  return (
    <div className="bg-slate-900 w-full py-10">
      <div className="grid place-items-center my-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="bg-gray-800 border-2 h-7 text-white text-sm  py-1 px-1 rounded-md focus:outline-none  border-gray-600 mx-5"
            type="text"
          />
          <button
            onClick={FilterUser}
            className="bg-blue-800 px-2 hover:bg-blue-600 h-7 text-white rounded-md"
          >
            Buscar
          </button>
        </form>
      </div>
      <hr className="border-gray-600 my-5" />
      <div className="px-11 ">
        <table className="w-full">
          <thead className="uppercase text-sm text-slate-400 bg-gray-700 text-center">
            <tr>
              <th>id</th>
              <th>nombre</th>
              <th>last contact</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody className="text-white text-center">
            {DataUser.map((user, index) => (
              <tr
                className="border-b dark:bg-gray-800 dark:border-gray-700"
                key={user.name}
              >
                <td>{index}</td>
                <td>{user.name}</td>
                <td>{user.last}</td>
                <td className="flex my-2 justify-center items-center">
                  {user.status == true ? (
                    <div className="h-2 w-2 bg-blue-500 animate-ping rounded-full "></div>
                  ) : (
                    <div className="h-2 w-2 bg-red-500 animate-ping rounded-full"></div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={User}>Click</button>
    </div>
  );
}

export default Users;
