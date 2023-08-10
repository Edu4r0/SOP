function Users() {


  return (
    <div className="bg-slate-900 w-full py-10">
      <div className="grid place-items-center my-5"> 
        <form onSubmit={(e)=> e.preventDefault()}>
          <input className="bg-gray-800 border-2 h-7 text-white text-sm  py-1 px-1 rounded-md focus:outline-none  border-gray-600 mx-5" type="text" />
          <button className="bg-blue-800 px-2 hover:bg-blue-600 h-7 text-white rounded-md">Buscar</button>
        </form>
      </div>
      <div className="px-11 ">
        <table  className="w-full">
          <thead className="uppercase text-sm text-slate-400 bg-gray-700">
            <th>id</th>
            <th>nombre</th>
            <th>status</th>
          </thead>
        </table>
      </div>
    </div>
  );
}

export default Users;
