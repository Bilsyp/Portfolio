import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

function Nav() {
  return (
    <nav className="px-5 py-3 font-Poppins flex justify-between items-center mb-10">
      <div>
        <h2 className="text-3xl font-bold dark:text-cyan-600">Portfolio</h2>
      </div>
      <div>
        <button>
          <BsFillMoonStarsFill className="text-2xl" />
        </button>
        <button className="px-3 mx-3 py-2 rounded-xl bg-gradient-to-l text-white font-semibold to-cyan-500 from-slate-600">
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Nav;
