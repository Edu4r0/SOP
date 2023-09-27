import { useState } from "react";
import { Toaster, toast } from "sonner";
function SurveyCreate() {
  const [title, settitle] = useState("");
  const [answers, setAnswers] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [question, setQuestion] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");

  async function postData(questionData) {
    try {
      toast.loading("Cargando..");
      // eslint-disable-next-line no-unused-vars
      const response = await fetch("http://localhost:5000/Survey", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(questionData),
      });
      toast.success("Enviado con exito");
    } catch (error) {
      toast.error(`Error en el envio ${error.message} `);
    }
  }
  const handleCorrect = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index].isCorrect = !updatedAnswers[index].isCorrect;
    setAnswers(updatedAnswers);
  };

  const addAnswer = () => {
    if (newAnswer.trim() !== "") {
      if (answers.length < 4) {
        setAnswers([
          ...answers,
          { textoRespuesta: newAnswer, isCorrect: false },
        ]);
        setNewAnswer('')
      }
    }
  };

  const removeAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index, 1);
    setAnswers(updatedAnswers);
  };

  const saveQuestion = () => {
    // Aquí puedes enviar question y answers a tu API o hacer lo que necesites con ellos
    const questionData = {
      title: title,
      opciones: answers,
    };
    setQuestion(questionData);
    postData(questionData);
    setAnswers("");
  };

  return (
    <div className="bg-slate-900 w-full py-10 px-10 flex ">
      <div className="bg-slate-600 rounded-md h-4/5 w-1/3 gap-10 text-white px-5 py-5">
        <div className="text-center rounded-md">
          <h2 className="text-gray-100 text-2xl font-bold">
            Diseñador de Preguntas
          </h2>
        </div>

        <div className="flex gap-10 my-3">
          <label>Titulo:</label>
          <input
            className=" outline-none w-2/3 bg-slate-800 rounded-md px-1 py-1"
            type="text"
            value={title}
            placeholder="Titulo de la Pregunta"
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div>
          <span className="">Opciones</span>
          <hr className="w-full py-1" />
          <div className=" h-52 overflow-x-hidden">
            <ul className="flex flex-col gap-2">
              {answers.length > 0 ? (
                answers.map((answer, index) => (
                  <li
                    onClick={() => handleCorrect(index)}
                    className={`flex justify-between cursor-pointer ${
                      answers[index].isCorrect ? "bg-green-400" : "bg-slate-800"
                    } px-2 py-2 rounded-md`}
                    key={index}
                  >
                    {answer.textoRespuesta}
                    <button
                      className="bg-red-500 rounded-md px-2 hover:bg-red-400"
                      onClick={() => removeAnswer(index)}
                    >
                      Eliminar
                    </button>
                  </li>
                ))
              ) : (
                <div className="flex justify-center my-20">
                  <span>No hay datos</span>
                </div>
              )}
            </ul>
          </div>
          <div className="py-2 flex justify-between">
            <input
              type="text"
              id = "answer"
              className=" outline-none w-2/3 h-1/6 bg-slate-800 rounded-md px-1 py-1"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Nueva respuesta"
            />
            <button
              className="bg-blue-800 hover:bg-blue-700 rounded-md px-2 py-1"
              onClick={addAnswer}
            >
              Agregar
            </button>
          </div>
        </div>
        <div className="flex  justify-center items-end px-2 bg-slate-700 hover:bg-slate-800 rounded-md">
          <button className="py-2 " onClick={saveQuestion}>
            Añadir Pregunta
          </button>
        </div>
      </div>
      <Toaster richColors closeButton theme="system" />
    </div>
  );
}

export default SurveyCreate;
