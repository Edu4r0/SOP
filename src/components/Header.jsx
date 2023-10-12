function Header() {
  return (
    <>
      <header className="flex bg-gray-950 items-center justify-between flex-wrap px-5 py-2">
        <div className="w-1/7">
          <a href="https://flowbite.com/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3"
              alt="Flowbite Logo"
            />
            <span className="text-2xl font-semibold text-white">SaludOcup</span>
          </a>
        </div>
        <div className="flex">
          <form className="flex gap-5" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-gray-800 border-gray-600 border-2  px-1 rounded-md w-3/4 text-white focus:border-gray-500 focus:border-2 focus:outline-none"
              type="text"
            />
            <button className="text-white bg-slate-700 px-3 rounded-md border border-gray-600 font-medium hover:bg-slate-600">
              Buscar
            </button>
          </form>
        </div>
        <img
          className="h-8 rounded-full"
          src={`https://ui-avatars.com/api/?name=admin&background=1E293B&color=fff&bold=true&rounded=true`}
          alt="Avatar Admin"
        />
      </header>
      <hr className="border border-slate-600 rounded-lg mx-auto" />
    </>
  );
}

export default Header;
