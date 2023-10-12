import { useState, useEffect } from "react";
import { useParams } from "react-router";
import colors from "../../data/Color";
import NotFound from "../NotFound";
import SurveyFinish from "./SurveyFinish";
import SurveyShown from "./SurveyShown";
import Loading from "../../components/Loading";

function SurveyClassic() {
  const { user } = useParams();

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
        const response = await fetch("https://api-sop.onrender.com/SurveyList");
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
      <SurveyFinish
        puntuación={puntuación}
        preguntas={preguntas}
        setIsFinished={setIsFinished}
        setAnswersShown={setAnswersShown}
        setPreguntaActual={setpreguntas}
      />
    );

  if (answersShown)
    return (
      <SurveyShown puntuación={puntuación} preguntas={preguntas} user={user} />
    );

  if (preguntas.length === 0) return <NotFound name="No Hay preguntas" />;
  return (
    <Loading/>
  );
}

export default SurveyClassic;
