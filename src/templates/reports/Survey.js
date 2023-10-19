import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import fechAPI from "../../data/FechApi";
async function printSurvey() {
    const response = await fechAPI('surveylist')
    const data = await response.json();
    const tableata = data.map((user)=> [user.id, user.name, user.last, user.status])
    const doc = new jsPDF()
    autoTable(doc,{
        head:[['ID','NOMBRE','ULTIMO CONTACTO','STATUS']],
        body: tableata,
    })
    doc.save('users.pdf')
}
export default printSurvey;