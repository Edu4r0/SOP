import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fechAPI from "../../data/FechApi";
import Loading from "../../components/Loading";

function WarningClassic() {
  const [dataUrl, setDataUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [numero, setNumero] = useState(12);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const data = await fechAPI("lastnotice");
        setDataUrl(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getData();

    const interval = setInterval(() => {
      setNumero((prevNumero) => {
        if (prevNumero > 0) {
          return prevNumero - 1;
        } else {
          setExit(true);
          clearInterval(interval);
          return prevNumero; // This is just to be explicit, you don't have to return prevNumero here.
        }
      });
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <main className="h-full flex flex-col justify-between bg-gray-900">
      {loading ? (
        <Loading />
      ) : (
        <section className="relative">
          <img className="h-full" src={dataUrl.secure_url} alt="Aviso" />
          <div className="absolute bottom-0 left-0 right-0 my-10 grid place-items-center">
            {exit ? (
              <Link to={'/exit'}>
                <button
                onClick={() => window.location("/survey/surveyclassic/exit")}
                className="py-2 bg-blue-800 w-44 text-slate-50 rounded-md font-poppins"
              >
                Salir
              </button>
              </Link>
            ) : (
              <span className="text-4xl font-bold font-poppins text-blue-800 animate-ping ease-out">
                {numero}
              </span>
            )}
          </div>
        </section>
      )}
    </main>
  );
}

export default WarningClassic;
