import React from "react";
import Image from "next/image";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
function Hero() {
  return (
    <section className="text-center my-15 p-8 hero md:flex md:text-left justify-between items-center ">
      <div className="sm:max-w-md mx-auto md:max-w-xl">
        <h1 className="text-5xl  lg:text-6xl font-bold">
          <span className="bg-gradient-to-r from-cyan-500 to-slate-700 bg-clip-text text-transparent dark:text-cyan-400">
            Bilal Syahputra{" "}
          </span>
          <br />
        </h1>
        <h2 className="text-md py-3 font-semibold text-gray-700 lg:text-2xl md:text-xl dark:text-gray-200">
          Developer and Designer
        </h2>

        <p className="text-md md:text-xl lg:text-2xl text-gray-500 py-4 leading-8 ">
          As a Junior Web Developer (JWD), I have knowledge in PHP5, MySQL,
          HbTML, Javascript, and Jquery as well as skills in Object Oriented
          Programming. I am a fresh graduate and am ready to learn.
        </p>
        <div className="flex justify-center items-center gap-10 md:justify-start my-10 dark:text-white">
          <BsGithub className="text-4xl hover:text-cyan-500 duration-300 hover:scale-105" />
          <BsTwitter className="text-4xl hover:text-cyan-500 duration-300 hover:scale-105" />
          <BsLinkedin className="text-4xl hover:text-cyan-500 duration-300 hover:scale-105" />
        </div>
      </div>
      <div className="hidden group lg:block duration-300 hover:bg-gradient-to-r from-cyan-500 to-slate-700 bg-cyan-500 mr-10   h-[400px] w-[400px] p-5 relative rounded-full overflow-hidden">
        <Image
          width={550}
          height={350}
          alt="hero"
          className="absolute group-hover:bottom-0 duration-300  -bottom-10 "
          priority
          src={"/blue-assets/user.png"}
        />
      </div>
    </section>
  );
}

export default Hero;
