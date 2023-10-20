import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import fechAPI from "../../data/FechApi";

async function printTask() {
    const data = await fechAPI('tasksList')
    const tabledata = data.map((task) => [task.id, task.task_information.name, task.task_information.descripcion, task.task_information.date, task.task_information.completed,task.last])
    const doc = new jsPDF()
    console.log(tabledata)
    autoTable(doc, {
        head: [['ID', 'TITULO', 'DESCRIPCION', 'F. EJECUCION', 'STATUS', 'F. CREACION']],
        body: tabledata,
    })
    doc.save('tareas.pdf')
}
export default printTask;