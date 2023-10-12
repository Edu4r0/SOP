function SurveyShown(props) {
  const {preguntas, user,puntuación} = props
  return (
    <main className="bg-slate-800 h-screen flex justify-center items-center text-white font-poppins">
        <div className="bg-slate-700 flex justify-between flex-col h-4/5 w-1/3 rounded-md px-5 py-5 text-center">
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
                <span className="">dsdds</span>
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
            {preguntas.map((pregunta) => (
              <div
                className="flex gap-2 flex-col justify-center items-center"
                key={pregunta.title}
              >
                <span className="bg-slate-800 flex justify-center w-full py-1 rounded-md">
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
            className="flex justify-center gap-x-2 bg-blue-600 py-2 rounded-md px-10"
            onClick={() => {
              window.location("/survey/surveyclassi");
            }}
          >
            Salir
          </button>
        </div>
      </main>
  )
}

export default SurveyShown