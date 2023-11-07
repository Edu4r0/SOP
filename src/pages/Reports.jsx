import Cardreports from "../components/Card-reports";
import { Toaster, toast } from "sonner";

function Reports() {
  return (
    <main className="w-full bg-gray-50 h-screen dark:bg-gray-900 px-5 py-5">
      <h2 className="text-2xl font-bold dark:text-white text-gray-900">
        Reportes
      </h2>
      <hr className="my-3 border border-slate-300 dark:border-slate-600 rounded-lg mx-auto" />
      <Cardreports toast={toast} />
      <Toaster theme="system" closeButton />
    </main>
  );
}

export default Reports;
