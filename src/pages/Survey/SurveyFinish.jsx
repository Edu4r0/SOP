
function SurveyFinish(props) {
   const {puntuación, preguntas, setIsFinished,setAnswersShown,setPreguntaActual} = props; 
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
  )
}

export default SurveyFinish