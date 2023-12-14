import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import colors from "../../data/Color";
import Coffeti from "../../components/Coffeti";
import fechAPI from "../../data/FechApi";
import Loading from "../../components/Loading";
import NotFound from "../NotFound";

function SurveyClassic() {
  const { user } = useParams();

  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);
  const [preguntas, setpreguntas] = useState([]);
  const [optionselect, setOptionselect] = useState([]);
  const [points, setPoints] = useState(0);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    async function fechData() {
      try {
        const data = await fechAPI("surveyList");
        setpreguntas(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setloading(false);
      }
    }
    fechData();
  }, []);

  useEffect(() => {
    fetch(`https://api-sop.vercel.app/api/v1/points?name=${user}&points=${points}`, {
      method: "POST",
    })
  }, [isFinished])
  

  function handleAnswerSubmit(isCorrect, textoRespuesta) {
    // añadir puntuación
    const selection = {
      opcion: textoRespuesta,
      correct: isCorrect,
    };
    setOptionselect([...optionselect, [selection]]);
    if (isCorrect) setPuntuación(puntuación + 1);
    if (isCorrect) setPoints(points + 10);
    // añadir estilos de pregunta
    // cambiar a la siguiente pregunta

    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
      }
    }, 1500);
  }
  function color(index) {
    const colorhover = `${colors[index].color} ${colors[index].hover}`;
    return colorhover;
  }

  if (isFinished)
    return (
      <main className="bg-slate-800 h-screen flex justify-center items-center text-white font-poppins">
        <div className="bg-slate-700 flex flex-col h-2/3 w-1/3 rounded-md px-5 py-5 text-center">
          <div>
            <div>
              <div className="text-2xl font-bold"> Encuesta terminada </div>
              <hr className="w-full" />
              <section className="my-10">
                Obtuviste {puntuación} de {preguntas.length} <br />
                <br />
                Que te parecio la encuesta
              </section>
            </div>
            <div className="text-3xl my-10 w-full">⭐⭐⭐⭐⭐</div>
            <button
              className="bg-blue-700 py-2 px-2 rounded-md hover:bg-blue-600"
              onClick={() => {
                setIsFinished(false);
                setAnswersShown(true);
                setPreguntaActual(0);
              }}
            >
              Ver respuestas
            </button>
          </div>
          <br />
          <br />
          <br />
          <footer className="w-full text-left">
            <p className="text-sm">© Copyright ISC-SA</p>
          </footer>
        </div>
      </main>
    );

  if (answersShown)
    return (
      <main className="bg-slate-800  h-screen flex justify-center items-center text-white font-poppins">
        {puntuación > preguntas.length - puntuación ? <Coffeti /> : ""}
        <div className="bg-slate-700 flex justify-between flex-col  w-1/3 rounded-md px-5 py-5 text-center">
          <div className="numero-pregunta">
            <span className="bg-slate-900 w-full font-bold flex justify-center py-2 rounded-md fo">
              Resumen
            </span>
          </div>
          <div className="flex flex-col gap-5 my-2 overflow-y-visible">
            <div className="bg-slate-950 flex px-4 justify-between rounded-md gap-2 py-2">
              <div className="flex gap-2">
                <span className="bg-white rounded-full h-10 w-10">
                  <img
                    src={`https://ui-avatars.com/api/?name=${user}&background=FFFFFF&bold=true&rounded=true`}
                    alt="aux-sistemas"
                  />
                </span>

                <span className="uppercase ">{user}</span>
              </div>

              <div className="flex gap-2">
                <span>Puntos:</span>
                <span className="">{points}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-green-700 flex gap-2 h-20 rounded-md py-2 px-2">
                <div className="flex flex-col w-full">
                  <div className="flex gap-2">
                    <img
                      className="h-6 w-6"
                      src="/check-circle.png"
                      alt="Correcto"
                    />
                    <span className="text-slate-100">Correctas</span>
                  </div>
                  <div className="flex justify-center">
                    <span className="px-2 py-2 text-2xl">{puntuación}</span>
                  </div>
                </div>
              </div>
              <div className="bg-red-700 gap-2 flex h-20 rounded-md py-2 px-2">
                <div className="flex flex-col w-full">
                  <div className="flex gap-2">
                    <img
                      className="h-6 w-6"
                      src="/x-circle.png"
                      alt="Incorrecto"
                    />
                    <span className="text-slate-100">Incorrectas</span>
                  </div>
                  <div className="flex justify-center">
                    <span className="px-2 py-2 text-2xl">
                      {preguntas.length - puntuación}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <hr className="border border-slate-500" />
            <div className="h-44 overflow-x-auto rounded-md flex flex-col gap-2">
              {preguntas.map((pregunta, index) => (
                <div
                  className="flex gap-2 flex-col bg-slate-600 px-2 py-2 rounded-md justify-center items-center"
                  key={index}
                >
                  <span className="bg-slate-800 flex justify-center w-full py-1 rounded-md">
                    {pregunta.survey_information.title}
                  </span>
                  {pregunta.survey_information.opciones.map((opcion, index) => (
                    <div className="flex justify-center w-2/5" key={index}>
                      <span
                        className={`border-2 cursor-pointer  ${
                          opcion.isCorrect
                            ? " border-green-500 hover:bg-green-500  font-medium"
                            : " border-red-500  hover:bg-red-500"
                        } rounded-md w-3/4`}
                      >
                        {opcion.textoRespuesta}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <Link to={"/exit"}>
            <button className="flex justify-center gap-x-2 bg-blue-600 py-2 rounded-md px-10">
              Salir
            </button>
          </Link>
        </div>
      </main>
    );
  if (loading) return <Loading />;

  if (preguntas.length === 0) return <NotFound name="No hay preguntas" />;
  return (
    <main className="dark:bg-slate-950 text-gray-900 bg-gray-50 dark:text-white font-poppins h-screen px-5 py-5">
      <div className="">
        <div className="flex justify-between ">
          <span className="px-2 py-2 bg-gray-50 border border-gray-300 dark:bg-slate-800 rounded-md">
            {" "}
            Pregunta {preguntaActual + 1} de {preguntas.length}{" "}
          </span>
          <div></div>
        </div>
      </div>
      <div className="flex justify-center h-3/5 items-center text-2xl">
        {preguntas.length > 0
          ? preguntas[preguntaActual].survey_information.title
          : ""}
      </div>
      <div className="flex justify-between gap-5  items-end">
        {preguntas[preguntaActual].survey_information.opciones.map(
          (respuesta, index) => (
            <button
              className={`${color(
                index
              )}   text-xl text-slate-800 font-bold rounded-md cursor-pointer h-40 w-1/3`}
              key={index}
              onClick={() =>
                handleAnswerSubmit(
                  respuesta.isCorrect,
                  respuesta.textoRespuesta
                )
              }
            >
              {respuesta.textoRespuesta}
            </button>
          )
        )}
      </div>
    </main>
  );
}

export default SurveyClassic;
