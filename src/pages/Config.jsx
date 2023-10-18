function Config() {
  return (
    <main className="bg-gray-50 h-[100vh] dark:bg-gray-900 w-full px-5 py-5">
      <h2 className="font-bold text-2xl text-gray-900 dark:text-white">
        Configuracion
      </h2>
      <hr className="my-3 border border-slate-300 dark:border-slate-600 rounded-lg mx-auto" />
      <section className="grid  grid-cols-2 gap-2">
        <div className="rounded-md px-5 py-5 shadow dark:border bg-white  dark:bg-gray-800 dark:border-gray-700 w-full h-72">
          <span className="text-lg font-bold">Personalización</span><br />
          <span className="text-gray-900 font-bold my-2 dark:text-white">Tema</span>
          <div className="flex  justify-between">
            Claro || Oscuro
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 "></div>
            </label>
          </div>
          <hr className="my-3 border border-slate-300 dark:border-slate-600 rounded-lg mx-auto" />
        </div>
        <div className="rounded-md px-5 py-5 shadow dark:border bg-white  dark:bg-gray-800 dark:border-gray-700 w-full h-72"></div>
        <div className="rounded-md px-5 py-5 shadow dark:border bg-white  dark:bg-gray-800 dark:border-gray-700 w-full h-72"></div>
        <div className="rounded-md px-5 py-5 shadow dark:border bg-white  dark:bg-gray-800 dark:border-gray-700 w-full h-72"></div>

        
      </section>
      <div className="-bottom-12 animate-bounce  right-10 absolute">
        <button className="px-5 py-2 my-2 rounded-md bg-blue-800 text-white">
          Guardar
        </button>
        </div>
      
    </main>
  );
}

export default Config;
