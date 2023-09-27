import { useState } from "react";
import { Toaster, toast } from "sonner";

function Image() {
  const [file, setfile] = useState("");
  const [filename, setfilename] = useState("");

  function handleRemove() {
    setfile("");
    setfilename("");
  }
  function handleClick() {
    const inputfile = document.getElementById("inputfile");
    inputfile.click();
  }
  function handleChange({ target: { files } }) {
    setfilename(files[0].name);
    setfile(URL.createObjectURL(files[0]));
  }
  function handleURL() {
    window.open(file);
  }

  return (
    <main className="bg-slate-900 w-full">
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-white text-2xl font-bold ">
          Arrastra & Suelta Archivos
        </h2>
        <div className=" bg-slate-800 h-60 w-2/3 my-5 py-5 px-5 rounded-2xl">
          <div className="flex justify-center items-center h-full border-dashed border-blue-800 border-2 w-full rounded-2xl">
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              className="hidden  w-full"
              type="file"
              accept="image/png, image/jpeg, video/mp4,video/mpeg, application/pdf"
              name="unpload"
              id="inputfile"
            />
            {filename.length > 0 ? (
              <div className="text-white px-2 py-2 flex flex-col gap-5 rounded-md">
<<<<<<< HEAD
                <span>Quiers enviar este achivo ?</span>
                <div className="flex justify-around">
                  <button onClick={()=> toast.success('Imagen subida')} className="bg-blue-500 py-1 w-14 rounded-md">
=======
                <span>Quiers enviar este archivo ?</span>
                <div className="flex justify-around">
                  <button onClick={()=> toast.success('Archivo enviado')} className="bg-blue-500 py-1 w-14 rounded-md">
>>>>>>> af4edacabc844d10223e7340e5ca2eff63e2757f
                    Si
                  </button>
                  <button
                    onClick={handleRemove}
                    className="bg-red-500 py-1 w-14 rounded-md"
                  >
                    No
                  </button>
                </div>
              </div>
            ) : (
              <span
                onClick={handleClick}
                className="text-white hover:bg-blue-600 cursor-pointer bg-blue-800 px-2 py-2 rounded-md"
              >
                Subir Archivo
              </span>
            )}
          </div>
        </div>
        {file && (
          <div className="flex items-center justify-between px-2 py-2 h-12 w-2/3 bg-slate-800 text-white rounded-lg">
            <span>{filename}</span>
            <div className="flex gap-5">
              <button
                onClick={handleURL}
                className="px-2 py-2 rounded-sm hover:bg-slate-600 bg-slate-700 border-blue-900"
              >
                <img src="/eye.png" alt="" />
              </button>

              <button
                className="py-2 px-2 rounded-sm hover:bg-slate-600 bg-slate-700 border-none"
                onClick={handleRemove}
              >
                <img src="/trash-bin.png" alt="" />
              </button>
            </div>
          </div>
        )}
      </div>
      <Toaster theme="system" richColors closeButton />
    </main>
  );
}

export default Image;
