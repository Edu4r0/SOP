import { useState } from "react";

function Users() {
  const [DataUser, setDataUser] = useState([]);


  async function User() {
    // eslint-disable-next-line no-unused-vars
    const response = await fetch("http://localhost:5000/UsersList")
    const data = await response.json()
    setDataUser(data)
  }
  User()
  
  function hadleSubmit(e) {
    e.preventDefault();

    
  }

<<<<<<< HEAD
  const FilterUser = DataUser.map((data) => console.log(data));

  return (
    <div className="bg-slate-900 w-full py-10">
      <div className="grid place-items-center my-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
=======
  return (
    <div className="bg-slate-900 w-full py-10 ">
      <div className="grid place-items-center my-5">
        <form
          onSubmit={
            hadleSubmit
          }
>>>>>>> 455e7b5a43ba38817154c5409b573e736bf28fa6
        >
          <input
            name="input"
            className="bg-gray-800 border-2 h-7 text-white text-sm  py-1 px-1 rounded-md focus:outline-none  border-gray-600 mx-5"
            type="text"
          />
          <button
<<<<<<< HEAD
            onClick={FilterUser}
=======
>>>>>>> 455e7b5a43ba38817154c5409b573e736bf28fa6
            className="bg-blue-800 px-2 hover:bg-blue-600 h-7 text-white rounded-md"
          >
            Buscar
          </button>
        </form>
      </div>
      <hr className="border-gray-600 my-5" />
      <div className="px-11 ">
        <table className="w-full ">
          <thead className="uppercase text-sm text-slate-400 bg-gray-700 text-center">
            <tr>
              <th>id</th>
              <th>nombre</th>
              <th>last contact</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody className="text-white text-center">
            {DataUser.length > 0 ? DataUser.map((user, index) => (
              <tr
                className="border-b bg-gray-800 border-gray-700"
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
            )) : <tr >
              <td colSpan={4}> No hay Datos</td>
            </tr> }
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Users;
