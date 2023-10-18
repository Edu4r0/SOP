function Header() {
  return (
    <>
      <header className="flex bg-white  dark:bg-gray-950 items-center justify-between flex-wrap px-5 py-2">
        <div className="w-1/7">
          <a href="/dashboard" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-6 mr-3"
              alt="Flowbite Logo"
            />
            <span className="text-2xl font-semibold dark:text-white text-gray-900">SaludOcup</span>
          </a>
        </div>
    
        <img
          className="h-8 rounded-full"
          src={`https://ui-avatars.com/api/?name=admin&background=1E293B&color=fff&bold=true&rounded=true`}
          alt="Avatar Admin"
        />
      </header>
      <hr className="border border-slate-300 dark:border-slate-600  rounded-lg mx-auto" />
    </>
  );
}

export default Header;
