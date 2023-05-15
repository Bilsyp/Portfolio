"use client";
import React, { useCallback, useContext } from "react";
import { Theme } from "@/Tech/tech";
import Dark from "./Dark";
function Nav() {
  return (
    <nav className="px-5 py-3 font-Poppins flex justify-between items-center mb-10 dark:bg-gradient-to-b from-slate-800 to-cyan-800">
      <div>
        <h2 className="text-4xl font-bold cursor-pointer font-Roboto dark:text-white">
          Portfolio
        </h2>
      </div>
      <div className="flex justify-center items-center gap-x-4">
        <Theme.Provider value="dark">
          <Dark />
        </Theme.Provider>

        <button className="px-3 mx-3 py-2 rounded-xl bg-gradient-to-l text-white font-semibold to-cyan-500 from-slate-600">
          Resume
        </button>
      </div>
    </nav>
  );
}

export default Nav;
