import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import fechAPI from "../../data/FechApi";
async function printSurvey() {
    const data = await fechAPI('surveylist')
    const tabledata = data.map((survey)=> [survey.id,survey.survey_information.title,survey.survey_information.opciones[0].textoRespuesta,survey.survey_information.opciones[1].textoRespuesta,survey.survey_information.opciones[2].textoRespuesta,survey.survey_information.opciones[3].textoRespuesta,survey.last,survey.date ])
    const doc = new jsPDF()
    autoTable(doc,{
        head:[['ID','TITULO','OPC 1','OCP 2','OCP 3','OCP 4','F. CREACION','F. EJECUCION']],
        body: tabledata,
    })
    doc.save('encuestas.pdf')
}
export default printSurvey;