import { useState, useEffect } from "react";
import { Toaster, toast } from "sonner";
import Trash from "../Icon/Trash";
function SurveyCreate() {
  const [title, settitle] = useState("");
  const [answers, setAnswers] = useState([]);
  const [loadsurvey, setloadsurvey] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");
  const [date, setDate] = useState("");

  async function postData(questionData) {
    try {
      console.log(questionData)
      toast.loading("Cargando..");
      const response = await fetch(
        "https://api-sop.vercel.app/api/v1/create/survey",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(questionData),
        }
      );
      if (response.status === 200) {
        setloadsurvey([...loadsurvey, questionData]);
        await toast.success("Enviado con exito");
      }else{
        await console.log(response);
        await toast.error(`Error en el envio ${response.error}`);
      }
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
        setNewAnswer("");
      }
    }
  };

  const removeAnswer = (index) => {
    const updatedAnswers = [...answers];
    updatedAnswers.splice(index, 1);
    setAnswers(updatedAnswers);
  };

  useEffect(() => {
    if (title.length <= 0) {
      document.getElementById("title").focus();
    }else{
      document.getElementById("answer").focus();

    }
  }, [newAnswer]);

  const saveQuestion = () => {
    if (title.trim() === "") {
      toast.error("Ingrese un titulo");
      return;
    }
    if (!date) {
      toast.error("Ingrese una fecha");
      return
    }
 
    const questionData = {
      date,
      title: title,
      opciones: answers,
    };
    postData(questionData);
    setAnswers([]);
  };

  return (
    <div className="dark:bg-slate-900 bg-slate-50 w-full h-screen flex items-start justify-between py-10 px-10 ">
      <div className="shadow dark:border bg-white  dark:bg-gray-600 dark:border-gray-700 rounded-md h-4/5 w-1/3 gap-10 text-white px-5 py-5">
        <div className="text-center rounded-md">
          <h2 className="dark:text-gray-100 text-gray-900 text-2xl font-bold">
            Diseñador de Preguntas
          </h2>
        </div>

        <div className="flex gap-2 my-3">
          <input
            className=" outline-none w-2/3 border border-gray-300 bg-gray-50 dark:bg-slate-800  text-gray-900 dark:text-gray-100 rounded-md px-1 py-1"
            type="text"
            id="title"
            value={title}
            placeholder="Titulo de la Pregunta"
            onChange={(e) => settitle(e.target.value)}
          />

          <input
            className="dark:text-gray-100 text-gray-900 border rounded-md px-2 bg-gray-50 border-gray-300"
            placeholder="Fecha"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div>
          <span className="">Opciones</span>
          <hr className="w-full py-1" />
          <div className=" h-52 overflow-x-hidden">
            <ul className="flex flex-col gap-2">
              {answers.length > 0 ? (
                answers.map((answer, index) => (
                  <div className="flex justify-center items-center gap-4" key={index}>
                    <li
                      onClick={() => handleCorrect(index)}
                      className={`flex w-full justify-between cursor-pointer ${
                        answers[index].isCorrect
                          ? "bg-green-400"
                          : "bg-gray-200 text-gray-900 dark:text-gray-100 dark:bg-slate-800"
                      } px-2 py-2 rounded-md`}
                      key={index}
                    >
                      {answer.textoRespuesta}
                    </li>
                    <div>
                      <button onClick={() => removeAnswer(index)}>
                        <Trash  />
                      </button>
                    </div>
                  </div>
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
              id="answer"
              autoComplete="off"
              className=" outline-none w-2/3 border border-gray-300 bg-gray-50 dark:bg-slate-800  text-gray-900 dark:text-gray-100 rounded-md px-1 py-1"
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
        <div className="flex  justify-center items-end px-2 dark:text-gray-100 text-gray-900 font-bold dark:bg-slate-700 dark:hover:bg-slate-800 bg-gray-300 hover:bg-gray-400  rounded-md">
          <button className="py-2 " onClick={saveQuestion}>
            Añadir Pregunta
          </button>
        </div>
      </div>
      <section className="flex w-1/3 justify-center">
        {loadsurvey.map((answer, index) => (
          <div
            className="bg-slate-600 w-2/3 px-5 py-2 border border-slate-700 rounded-md text-slate-200 "
            key={index}
          >
            <div className="flex justify-between items-center">
              <span>{answer.title}</span>
              <span className="text-slate-400 text-sm">
                opciones : <span className="">{answer.opciones.length}</span>
              </span>
            </div>
          </div>
        ))}
      </section>
      <Toaster richColors closeButton theme="system" />
    </div>
  );
}

export default SurveyCreate;
