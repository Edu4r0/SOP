import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Menus from "../data/Sidebar";

function Sidebar() {
  const [open, setopen] = useState(true);
  const [opentab, setopentab] = useState(false)
  const navigate = useNavigate();

  function handleredirect(index) {
    let src = Menus[index].href;

    navigate(src);
  }
  function handleclick() {
    setopentab(!opentab)
  }
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
          src="/expand.svg"
          alt=""
        />

        <ul className="px-4 py-4 flex flex-col gap-1">
          {Menus.map((menu, index) => (
            <li
              key={menu.id} // Use a unique identifier here
              onClick={menu.id == 6 ? handleclick : null}
              className={`${
                `flex rounded-md p-2 cursor-pointer hover:bg-slate-500 text-gray-300 text-sm items-center gap-x-4 ${
                  open ? "" : "w-10"
                } duration-150`
              } ${menu.id === 7 || menu.id === 8 ? (opentab ? "block bg-slate-900" : "hidden") : ""}`}
            >
            
              <img src={`/${menu.src}.png`} alt={menu.title} />
              <a
                htmlFor={menu.for}
                className={`font-semibold  ${open ? "w-36" : "scale-0"}`}
                onClick={() => handleredirect(menu.id, index)}
              >
                {menu.title}
              </a>
              <img src={`${menu.imgdrop ? `${menu.imgdrop}` : "" }.png`} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
