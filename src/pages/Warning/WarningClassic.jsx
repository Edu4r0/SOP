import { useState, useEffect } from "react";
import fechAPI from "../../data/FechApi";

function WarningClassic() {
  const [dataUrl, setDataUrl] = useState("");

  useEffect(() => {
    async function getData() {
      const data = await fechAPI("lastnotice");
      setDataUrl(data);
    }
    getData();
  }, []);

  return (
    <main className="h-screen w-full flex flex-col justify-between bg-gray-900 px-5 py-5">
      <img className="" src={dataUrl.secure_url} alt="Aviso" />
      <div>dada</div>
    </main>
  );
}

export default WarningClassic;
