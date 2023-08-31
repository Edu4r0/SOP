function Survey() {
  return (
    <div className="bg-slate-900 w-full py-10">
      <h2 className="text-white text-3xl text-center">
        Elija como quiere crear su encuesta{" "}
      </h2>
      <div className="flex justify-center items-center gap-10">
        <div className="w-1/3 h-60 px-5 py-5 rounded-md  bg-slate-700">
          <a href="">

            <img
              className="filter grayscale w-20"
              src="https://cf.quizizz.com/img/quizizz_logos/purple-brandmark-600x164.png"
              alt=""
            />
          </a>
          <a href="">
            <img  className="filter grayscale h-10" src="https://www.gstatic.com/images/branding/product/2x/forms_2020q4_48dp.png" alt="" />
          </a>
        </div>
        <div className="w-1/3 h-60 px-5 py-5 rounded-md  bg-slate-700"></div>
      </div>
    </div>
  );
}

export default Survey;
