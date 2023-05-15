"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Tech, Framework, FrameworkJs, Tools, Packager } from ".";
function About() {
  const [selected, setSelected] = useState({
    Tech: true,
    Framework: false,
    FrameworkJs: false,
    Tools: false,
    Packager: false,
  });
  const handleTech = () => {
    setSelected((prev) => {
      return Object.keys(prev).reduce((acc, curr) => {
        acc[curr] = curr === "Tech";
        return acc;
      }, {});
    });
  };

  const handleFrameworkJs = () => {
    setSelected((prev) => {
      return Object.keys(prev).reduce((acc, curr) => {
        acc[curr] = curr === "FrameworkJs";
        return acc;
      }, {});
    });
  };

  const handleFrameworkCss = () => {
    setSelected((prev) => {
      return Object.keys(prev).reduce((acc, curr) => {
        acc[curr] = curr === "Framework";
        return acc;
      }, {});
    });
  };
  const handleTools = () => {
    setSelected((prev) => {
      return Object.keys(prev).reduce((acc, curr) => {
        acc[curr] = curr === "Tools";
        return acc;
      }, {});
    });
  };
  const handlePackager = () => {
    setSelected((prev) => {
      return Object.keys(prev).reduce((acc, curr) => {
        acc[curr] = curr === "Packager";
        return acc;
      }, {});
    });
  };
  return (
    <section className=" my-20">
      <div
        className="wave h-72 w-full bg-cover  bg-no-repeat"
        style={{ backgroundImage: "url('/icons/wave.svg')" }}
      ></div>
      <div className="lg:flex justify-between items-center my-20 p-8">
        <div className="sm:max-w-xl md:max-w-2xl">
          <h2 className="md:text-3xl lg:text-5xl  hover:underline duration-300 text-3xl font-semibold">
            About Me
          </h2>
          <p className="text-xl md:text-2xl lg:text-3xl leading-10  py-3 text-gray-600">
            I am writing to express my keen interest in the{" "}
            <span className="text-cyan-500">Junior Developer</span> position
            that was recently advertised. My name is Bilal Syahputra, and I am a
            fresh graduate with a passion for{" "}
            <span className="text-cyan-500">web development</span> technology.
          </p>
        </div>

        <div className="hidden group  lg:block hover:bg-gradient-to-r from-cyan-500 to-slate-700 bg-cyan-500 mr-10   h-[400px] w-[400px] p-5 relative rounded-full overflow-hidden">
          <Image
            width={350}
            height={250}
            alt="hero"
            className="absolute group-hover:bottom-0 duration-300  -bottom-20 "
            priority
            src={"/blue-assets/user-2.png"}
          />
        </div>
      </div>
      <div className="px-8  my-10  grid grid-cols-2  md:grid-cols-3  lg:grid-cols-4  gap-10 ">
        <button onClick={handleTech} className="btn ">
          Skills Tech
        </button>
        <button onClick={handleFrameworkJs} className="btn ">
          Framework Project
        </button>
        <button onClick={handleFrameworkCss} className="btn ">
          CSS Framework
        </button>
        <button onClick={handlePackager} className="btn ">
          Package Manager
        </button>
        <button onClick={handleTools} className="btn ">
          Tools
        </button>
      </div>
      {selected.Tech ? <Tech /> : null}
      {selected.Tools ? <Tools /> : null}
      {selected.Packager ? <Packager /> : null}
      {selected.Framework ? <Framework /> : null}
      {selected.FrameworkJs ? <FrameworkJs /> : null}

      <div
        className="wave h-72 w-full bg-cover mt-40  bg-no-repeat"
        style={{ backgroundImage: "url('/icons/backWave.svg')" }}
      ></div>
    </section>
  );
}

export default About;
