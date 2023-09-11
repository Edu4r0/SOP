import UsersTable from "../components/UsersTable";

function Users() {
  

  return (
    <main className="bg-slate-900 w-full px-5 py-5">
      <h2 className="font-bold text-white text-2xl">Usuarios</h2>
      <hr />
      
      <div className="px-11 py-10">
         <UsersTable/> 
      </div>
    </main>
  );
}

export default Users;