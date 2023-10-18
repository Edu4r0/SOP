import Cardreports from "../components/Card-reports";
function Reports() {
  return (
    <main className="w-full bg-gray-50  dark:bg-gray-900 px-5 py-5">
      <h2 className="text-2xl font-bold dark:text-white text-gray-900">Reportes</h2>
      <hr className="my-3 border border-slate-300 dark:border-slate-600 rounded-lg mx-auto" />


      <Cardreports />
    </main>
  );
}

export default Reports;
