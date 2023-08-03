function Dashboard() {
  return (
    <main className="bg-slate-900 w-full px-5 py-5 ">
        <div className="flex place-content-between gap-10">
            <div className="bg-slate-700 h-44 w-1/2"></div>
            <div className="bg-slate-700 h-44 w-14" ></div>
        </div>

      <div className="flex place-content-between gap-20 mx-auto py-5 ">
        <div className="bg-slate-800 h-32 w-60 rounded-md"></div>
        <div className="bg-slate-800 h-32 w-60 rounded-md"></div>
        <div className="bg-slate-800 h-32 w-60 rounded-md"></div>
      </div>
    </main>
  );
}

export default Dashboard;
