import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
async function printUser() {
    const response = await fetch('https://api-sop.vercel.app/api/userslist')
    const data = await response.json();
    const tableata = data.map((user)=> [user.id, user.name, user.last, user.status])
    const doc = new jsPDF()
    autoTable(doc,{
        head:[['ID','NOMBRE','ULTIMO CONTACTO','STATUS']],
        body: tableata,
    })
    doc.save('table.pdf')
}
export default printUser;