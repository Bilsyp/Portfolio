import React from "react";
import Image from "next/image";
function Framework() {
  return (
    <div className="Tech p-8  gap-9 flex justify-around items-center flex-col md:flex-row flex-wrap gap-y-8  ">
      <div className="rounded-xl group relative overflow-hidden flex-col-reverse py-4 px-5 box w-52 flex justify-center items-center  ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">
          BootStrap{" "}
        </h1>
        <Image
          src={"/Tech/bootstrap-4-icon.svg"}
          width={40}
          height={40}
          priority
          alt="bootstrap"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Advanced
          </span>
        </div>
      </div>
      <div className="rounded-xl group relative overflow-hidden flex-col-reverse py-4 px-5 box w-52 flex justify-center items-center  ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">
          Material UI
        </h1>
        <Image
          src={"/Tech/material-ui-svgrepo-com.svg"}
          width={40}
          height={40}
          priority
          alt="bootstrap"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Beginner
          </span>
        </div>
      </div>
      <div className="rounded-xl group relative overflow-hidden flex-col-reverse py-4 px-5 box w-52 flex justify-center items-center  ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">
          TailwindCss{" "}
        </h1>
        <Image
          src={"/Tech/tailwind-css-icon.svg"}
          width={40}
          height={40}
          priority
          alt="bootstrap"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Advanced
          </span>
        </div>
      </div>
      <div className="rounded-xl group relative overflow-hidden flex-col-reverse py-4 px-5 box w-52 flex justify-center items-center  ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">
          Ant Design{" "}
        </h1>
        <Image
          src={"/Tech/ant-design-svgrepo-com.svg"}
          width={40}
          height={40}
          priority
          alt="ant design"
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

export default Framework;
