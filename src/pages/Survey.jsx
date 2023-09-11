function Survey() {
  return (
    <div className="bg-slate-900 w-full py-10">
      <h2 className="text-white text-3xl text-center">
        Elija como quiere crear su encuesta{" "}
      </h2>
      <br />
      <div className="flex justify-center items-center gap-10">
        <div className="w-1/3 h-60 px-5 py-5 rounded-md  bg-slate-700 hover:bg-slate-600 cursor-pointer">
          <div className="flex  items-center flex-col">
            <a href="https://www.docs.google.com/forms">
              <img
                className="filter grayscale hover:grayscale-0"
                src="/googleforms.png"
                alt=""
              />
            </a>
          </div>
        </div>
        <div className="w-1/3 h-60 px-5 py-5 rounded-md hover:bg-slate-600  bg-slate-700 flex justify-center items-center text-center">
          <a href="survey\surveycreate">
            <span className="text-5xl font-bold text-slate-900 hover:text-blue-900">
              Modo <br /> Clasico
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Survey;
