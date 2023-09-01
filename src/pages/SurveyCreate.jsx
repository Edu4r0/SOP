import { useState, useEffect } from "react";
function SurveyCreate() {
  const [title, settitle] = useState("");
  const [answers, setAnswers] = useState([]);
  const [question, setQuestion] = useState([]);
  const [newAnswer, setNewAnswer] = useState("");

  const questionData = {
    titulo: "¿Cuál es el mejor lenguaje de programación?",
    opciones: [
      { textoRespuesta: "JavaScript", isCorrect: true },
      { textoRespuesta: "PHP", isCorrect: false },
      { textoRespuesta: "C++", isCorrect: false },
      { textoRespuesta: "Kotlin", isCorrect: false },
    ],
  };
  const [Survey, setSurvey] = useState("");

  useEffect(() => {
    async function postData() {
      try {
        const response = await fetch("http://localhost:5000/Survey", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(questionData),
        });

        const data = await response.json();
        setSurvey(JSON.stringify(data));
      } catch (error) {
        console.error(error.message);
      }
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addAnswer = () => {
    if (newAnswer.trim() !== "") {
      setAnswers([...answers, { textoRespuesta: newAnswer, isCorrect: false }]);
      setNewAnswer("");
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
      titulo: title,
      opciones: [
        answers.map((answer) => ({
          textoRespuesta: answer,
          isCorrect: true,
        })),
      ],
    };
    setQuestion(questionData);
    setAnswers("");
    console.log(answers);
  };

  return (
    <div className="bg-slate-900 w-full py-10 px-10 flex ">
      <div className="bg-slate-600 rounded-md h-2/3 w-1/3 gap-10 text-white px-5 py-5">
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
          <hr className="w-full py-2" />
          <ul className="flex flex-col gap-2">
            {answers &&
              answers.map((answer, index) => (
                <li
                  className="flex justify-between bg-slate-800 px-2 py-2 rounded-md"
                  key={index}
                >
                  {answer.textoRespuesta}
                  <button
                    className="bg-red-500 rounded-md py-1 px-2"
                    onClick={() => removeAnswer(index)}
                  >
                    Eliminar
                  </button>
                </li>
              ))}
          </ul>
          <div>
            <input
              type="text"
              value={newAnswer}
              onChange={(e) => setNewAnswer(e.target.value)}
              placeholder="Nueva respuesta"
            />
            <button onClick={addAnswer}>Agregar Respuesta</button>
          </div>
        </div>
        <button onClick={saveQuestion}>Guardar Pregunta</button>
      </div>
    </div>
  );
}

export default SurveyCreate;
