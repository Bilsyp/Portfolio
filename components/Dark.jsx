"use client";
import React, { useContext, useState } from "react";
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { Theme } from "@/Tech/tech";
function Dark() {
  const Themes = useContext(Theme);
  const [dark, setDark] = useState(true);
  console.log(Themes);
  const handle = () => {
    setDark(!dark);
    if (dark) {
      document.documentElement.classList.add(Themes);
      document.querySelector("body").className = "dark:bg-slate-800";
    } else document.documentElement.classList.remove(Themes);
  };
  return (
    <button onClick={handle}>
      {dark ? (
        <BsFillMoonStarsFill className="text-2xl" />
      ) : (
        <BsFillSunFill className="text-2xl text-white " />
      )}
    </button>
  );
}

export default Dark;
