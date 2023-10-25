import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import fechAPI from "../../data/FechApi";

async function printWarnings() {
    const data = await fechAPI('noticeList')
    const tabledata = data.map((notice) => [notice.id,notice.last,notice.secure_url])
    const doc = new jsPDF()
    autoTable(doc, {
        head: [['ID', 'FECHA DE SUBIDA', 'URL']],
        body: tabledata,
    })
    doc.save('avisos.pdf')
}
export default printWarnings;