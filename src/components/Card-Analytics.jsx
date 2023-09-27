function CardAnalytics(nombre) {
  const { name, number, color, image } = nombre;
  return (
    <a
      className="bg-slate-800 hover:bg-gray-700 cursor-pointer h-32 w-1/5 rounded-md px-5 py-5 "
      href={image}
    >
      <div className="flex justify-between text-right">
        <span className={`h-12 w-2 ${color} rounded-md`}></span>
        <div className="flex flex-col text-left">
          <span className="text-slate-400">{name}</span>
          <span className="text-3xl font-bold text-white">{number}</span>
        </div>
        <div className="bg-slate-900 h-10 w-10 rounded-md px-2 py-2  ">
          <img src={`/${image}.png`} alt={name} />
        </div>
      </div>
      <div className="flex justify-end text-white font-bold">
        <img src="/arrow-down.svg" alt="" />
        <span>- 4 %</span>
      </div>
    </a>
  );
}

export default CardAnalytics;
