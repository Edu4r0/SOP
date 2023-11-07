import UsersTable from "../components/UsersTable";

function Users() {
  

  return (
    <main className="bg-gray-50 dark:bg-gray-900 w-full px-5 py-5">
      <h2 className="font-bold dark:text-white text-2xl">Usuarios</h2>
      <hr className="my-3 border border-slate-300 dark:border-slate-600 rounded-lg mx-auto" />
      
      <div className="px-11 py-10 ">
         <UsersTable/> 
      </div>
    </main>
  );
}

export default Users;