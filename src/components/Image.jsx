import { useState } from "react";

function Image() {
  const [file, setfile] = useState("");
  const [filename, setfilename] = useState("");

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
          Hello To Drag & Drop Files
        </h2>
        <div className=" bg-slate-800 h-60 w-2/3 my-5 py-5 px-5 rounded-2xl">
          <div className="flex justify-center items-center h-full border-dashed border-blue-800 border-2 w-full rounded-2xl">
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              className="hidden  w-full"
              type="file"
              accept="image/png, image/jpeg"
              name="unpload"
              id="inputfile"
            />
            <span
              onClick={handleClick}
              className="text-white hover:bg-blue-600 cursor-pointer bg-blue-800 px-2 py-2 rounded-md"
            >
              Unpload Image
            </span>
          </div>
        </div>
        {file && (
          <div className="flex items-center justify-between px-2 py-2 h-12 w-2/3 bg-blue-800 rounded-lg">
            <img src="" alt="" />
            <span>{filename}</span>
            <div className="flex gap-5">
              <button
                onClick={handleURL}
                className="py-2 px-2 rounded-sm bg-lime-500 border-none"
              >
                <img src="/src/assets/eye.png" alt="" />
              </button>

              <span className="py-2 px-2 rounded-sm bg-red-800 border-none">
                <img src="/src/assets/trash-bin.png" alt="" />
              </span>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

export default Image;
