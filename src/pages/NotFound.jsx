import { Link } from "react-router-dom";

function NotFound(props) {
  // eslint-disable-next-line react/prop-types
  let {name='404 No Found'} = props;
  return (
    <main className="bg-slate-800 h-screen flex justify-center items-center text-white font-poppins">
      <div className="flex justify-center items-center ">
        <div>
          <span className="text-3xl font-bold">{name}</span>
          <br />
          <Link to={'/exit'}>
          <button className="my-5 bg-blue-600 rounded-md px-10 py-2">
            Salir
          </button>
          </Link>
        </div>
        <img className="w-3/4" src="/404 Error.svg" alt="404" />
      </div>
    </main>
  );
}

export default NotFound;
