import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";
import Menus from "../data/Sidebar";

function Sidebar() {
  const [open, setopen] = useState(false);
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
      <div
        className={`${
          open ? "w-48" : "w-20"
        }  h-[100vh] dark:bg-slate-950  bg-gray-900  dark:border-gray-700 flex relative duration-300`}
      >
        <img
          onClick={() => setopen(!open)}
          className={`absolute top-9 -right-3 border-2 border-blue-800 cursor-pointer ${
            open ? "rotate-90" : "-rotate-90"
          } bg-white  w-7 rounded-full duration-300`}
          src="/expand.svg"
          alt=""
        />

        <ul className="px-4 py-4 flex flex-col gap-1">
          {Menus.map((menu, index) => (
           <Link key={index} to={menu.href}>
             <li
            key={menu.id} 
            onClick={menu.id == 6 ? handleclick : null}
            className={`${
              `flex rounded-md p-2 cursor-pointer hover:bg-slate-500 h-10 text-gray-900 dark:text-gray-300 text-sm items-center gap-x-4 ${
                open ? "" : "w-10"
              }`
            } ${menu.id === 7 || menu.id === 8 ? (opentab ? " bg-slate-900" : "hidden") : ""}`}
          >
          
            <img className="duration-300" src={`/${menu.src}.png`} alt={menu.title} />
            <span
              className={`font-semibold duration-75  text-white ${open ? "w-28" : "scale-0"}`}
              onClick={() => handleredirect(menu.id, index)}
            >
              {menu.title}
            </span>
            <img className={`${open ? "block" : "hidden"}`} src={`${menu.imgdrop ? `${menu.imgdrop}` : "" }.png`} alt="" />
          </li>
           </Link>
          ))}
        </ul>
      </div>
  );
}

export default Sidebar;