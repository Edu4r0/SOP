function Survey() {
  return (
    <div className="bg-slate-900 w-full py-10">
      <h2 className="text-white text-3xl text-center">
        Elija como quiere crear su encuesta{" "}
      </h2>
      <br />
      <div className="flex justify-center items-center gap-10">
        <div className="w-1/3 h-60 px-5 py-5 rounded-md  bg-slate-700 hover:bg-slate-600 cursor-pointer">
          <div className="flex justify-around">
            <a href="">
              <img
                className="filter grayscale hover:grayscale-0 h-10"
                src="https://cf.quizizz.com/img/quizizz_logos/purple-brandmark-600x164.png"
                alt=""
              />
            </a>
            
          </div>
        </div>
        <div className="w-1/3 h-60 px-5 py-5 rounded-md hover:bg-slate-600 cursor-pointer bg-slate-700 flex justify-center items-center text-center">
          <span className="text-5xl font-bold text-slate-900 hover:text-blue-900">Modo <br /> Clasico</span>
        </div>
      </div>
    </div>
  );
}

export default Survey;
