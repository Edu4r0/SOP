import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import fechAPI from "../../data/FechApi";
async function printUser() {
    const response = await fechAPI('userslist')
    const data = await response.json();
    const tabledata = data.map((user)=> [user.id, user.name, user.last, user.status])
    const doc = new jsPDF()
    autoTable(doc,{
        head:[['ID','NOMBRE','ULTIMO CONTACTO','STATUS']],
        body: tabledata,
    })
    doc.save('usuarios.pdf')
}
export default printUser;