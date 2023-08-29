function CardAnalytics(nombre) {
    const { name, color, number } = nombre;
    console.log(name)
  return (
    <div className="bg-slate-800 h-32 w-1/5 rounded-md px-5 py-5 flex justify-between text-right">
      <span className={`h-12 w-2 ${color}  rounded-md`}></span>
      <div className="flex flex-col text-left">
        <span className="text-slate-400">{name}</span>
        <span className="text-3xl font-bold text-white">{number}</span>
      </div>
      <div className="bg-slate-700 h-10 w-10 rounded-md px-2 py-2  ">
        <img src={`src/assets/${name}.png`} alt="" />
      </div>
    </div>
  );
}

export default CardAnalytics;
