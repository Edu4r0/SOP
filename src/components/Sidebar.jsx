import { useState } from "react";
import Menus from "../data/Sidebar";

function Sidebar() {
  const [open, setopen] = useState(true);
  return (
    <div>
      <div
        className={`${
          open ? "w-60" : "w-20"
        }  h-screen bg-slate-950 flex relative duration-300`}
      >
        <img
          onClick={() => setopen(!open)}
          className={`absolute top-9 -right-3 border-2 border-blue-800 cursor-pointer ${
            open ? "rotate-90" : "-rotate-90"
          } bg-white w-7 rounded-full duration-300`}
          src="src/assets/expand.svg"
          alt=""
        />

        <ul className="px-4 py-4">
          {Menus.map((menu) => (
            <li
              key={menu.id} // Use a unique identifier here
              className={`flex rounded-md p-2 cursor-pointer hover:bg-slate-500 text-gray-300 text-sm items-center gap-x-4 
    ${open ? "" : "w-10"}
    duration-150`}
            >
              <img className="" src={`src/assets/${menu.src}.png`} alt="" />

              <a
                className={`font-semibold  ${open ? "w-36" : "scale-0"}`}
                href={menu.src}
              >
                {menu.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
