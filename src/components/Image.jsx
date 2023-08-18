import { useState } from "react";

function Image() {
  const [file, setfile] = useState(false)

  function handleClick() {
    const inputfile = document.getElementById('inputfile')
    inputfile.click()
  }

  return (
    <main className="bg-slate-900 w-full">
      <div className="flex flex-col items-center justify-center py-10">
        <h2 className="text-white text-2xl font-bold ">
          Hello To Drag & Drop Files
        </h2>
        <div className=" bg-slate-800 h-60 w-2/3 my-5">
          <div className="flex justify-center items-center h-full border-dashed border-blue-800 border-8 w-full">
            <input className="hidden" type="file" name="unpload" id="inputfile" />
            <span onClick={handleClick} className="underline text-white hover:text-blue-600 cursor-pointer">Unpload Image</span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Image;
