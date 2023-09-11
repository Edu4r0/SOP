import { useState, useEffect } from "react";
import colors from "../data/Color";

function SurveyClassic() {
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [puntuación, setPuntuación] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [tiempoRestante, setTiempoRestante] = useState(10);
  const [areDisabled, setAreDisabled] = useState(false);
  const [answersShown, setAnswersShown] = useState(false);
  const [preguntas, setpreguntas] = useState([]);
  const [optionselect, setOptionselect] = useState([]);
  useEffect(() => {
    async function fechData() {
      try {
        const response = await fetch("http://localhost:5000/SurveyList");
        const data = await response.json();
        setpreguntas(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fechData();
  }, []);

  function handleAnswerSubmit(isCorrect, textoRespuesta) {
    // añadir puntuación
    const selection = {
      opcion: textoRespuesta,
      correct: isCorrect,
    };
    setOptionselect([...optionselect, [selection]]);
    if (isCorrect) setPuntuación(puntuación + 1);
    // añadir estilos de pregunta
    // cambiar a la siguiente pregunta

    setTimeout(() => {
      if (preguntaActual === preguntas.length - 1) {
        setIsFinished(true);
      } else {
        setPreguntaActual(preguntaActual + 1);
        setTiempoRestante(10);
      }
    }, 1500);
  }
  function color(index) {
    const colorhover = `${colors[index].color} ${colors[index].hover}`;
    return colorhover;
  }

  useEffect(() => {
    const intervalo = setInterval(() => {
      if (tiempoRestante > 0) setTiempoRestante((prev) => prev - 1);
      if (tiempoRestante === 0) setAreDisabled(true);
    }, 1000);

    return () => clearInterval(intervalo);
  }, [tiempoRestante]);

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
      <main className="bg-slate-800 h-screen flex justify-center items-center text-white font-poppins">
        <div className="bg-slate-700 flex justify-between flex-col h-full w-1/3 rounded-md px-5 py-5 text-center">
          <div className="numero-pregunta">
            <span className="bg-slate-900 w-full font-bold flex justify-center py-2 rounded-md fo">
              Resumen
            </span>
          </div>
          <div className="flex flex-col gap-5 my-2 overflow-y-hidden">
            <div className="bg-slate-950 flex px-2 gap-2 py-2">
              <span className="bg-white  h-10 w-10">
                <img src="https://ui-avatars.com/api/?name=aux-sistemas&background=FFFFFF&bold=true&rounded=true" alt="aux-sistemas" />
              </span>
              <p>AUX-SISTEMAS</p>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-slate-800 h-20  w-full"></div>
              <div className="bg-slate-800 h-20  w-full"></div>
              <div className="bg-slate-800 h-20  w-full"></div>
              <div className="bg-slate-800 h-20  w-full"></div>
            </div>
            {preguntas.map((pregunta) => (
              <div
                className="flex gap-2 flex-col justify-center items-center"
                key={pregunta.title}
              >
                <span className="bg-slate-800 flex justify-center w-2/3 py-1 rounded-md">
                  {pregunta.title}
                </span>
                {pregunta.opciones.map((opcion, index) => (
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
          <button
            className="flex flex-row-reverse justify-center gap-x-2 bg-slate-900"
            onClick={() => {
              window.location("/survey/surveyclassi");
            }}
          >
            <img src="/x.png" alt="" />
            Salir
          </button>
        </div>
      </main>
    );

  return (
    <main className="bg-slate-950 text-white font-poppins h-screen px-5 py-5">
      <div className="">
        <div className="flex justify-between ">
          <span className="px-2 py-2 bg-slate-800 rounded-md">
            {" "}
            Pregunta {preguntaActual + 1} de {preguntas.length}{" "}
          </span>
          <div>
            {!areDisabled ? (
              <span
                className={`py-2 px-2 ${
                  tiempoRestante <= 4 ? "bg-red-800" : "bg-slate-800"
                }  rounded-md`}
              >
                Tiempo restante: {tiempoRestante}{" "}
              </span>
            ) : (
              <button
                className="py-2 px-2 bg-yellow-400 rounded-md"
                onClick={() => {
                  setTiempoRestante(10);
                  setAreDisabled(false);
                  if (preguntaActual === preguntas.length - 1) {
                    setIsFinished(true);
                  } else {
                    setPreguntaActual(preguntaActual + 1);
                  }
                }}
              >
                Continuar
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex justify-center h-3/5 items-center text-2xl">
        {preguntas.length > 0 ? preguntas[preguntaActual].title : ""}
      </div>
      <div className="flex justify-between gap-5  items-end">
        {preguntas.length > 0 ? (
          preguntas[preguntaActual].opciones.map((respuesta, index) => (
            <button
              className={`${color(
                index
              )}   text-xl text-slate-800 font-bold rounded-md cursor-pointer h-40 w-1/3`}
              disabled={areDisabled}
              key={respuesta.textoRespuesta}
              onClick={() =>
                handleAnswerSubmit(
                  respuesta.isCorrect,
                  respuesta.textoRespuesta
                )
              }
            >
              {respuesta.textoRespuesta}
            </button>
          ))
        ) : (
          <div>No hay preguntas por hoy</div>
        )}
      </div>
    </main>
  );
}

export default SurveyClassic;
