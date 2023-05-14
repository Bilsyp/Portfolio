import React from "react";
import Image from "next/image";
function Tools() {
  return (
    <div className="Tech p-8 flex justify-around items-center flex-col md:flex-row flex-wrap gap-y-8  ">
      <div className="rounded-xl group relative overflow-hidden flex-col-reverse py-4 px-5 box w-52 flex justify-center items-center  ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">
          Webpack
        </h1>
        <Image
          src={"/Tech/webpack-icon.svg"}
          width={40}
          height={40}
          priority
          alt="webpack"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Beginner
          </span>
        </div>
      </div>
      <div className="rounded-xl group relative overflow-hidden flex-col-reverse py-4 px-5 box w-52 flex justify-center items-center  ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">Vite</h1>
        <Image
          src={"/Tech/vite-svgrepo-com.svg"}
          width={40}
          height={40}
          priority
          alt="vite"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Beginner
          </span>
        </div>
      </div>
      <div className="rounded-xl group relative overflow-hidden flex-col-reverse py-4 px-5 box w-52 flex justify-center items-center  ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">GIMP</h1>
        <Image
          src={"/Tech/draw-gimp-paint-svgrepo-com.svg"}
          width={40}
          height={40}
          priority
          alt="GIMP"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Beginner
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tools;
