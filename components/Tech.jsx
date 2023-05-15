import React from "react";
import Image from "next/image";
function Tech() {
  return (
    <div className="Tech p-8 flex justify-around items-center flex-col md:flex-row flex-wrap gap-y-8  ">
      <div className="skill group ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">
          HTML5{" "}
        </h1>
        <Image
          src={"/Tech/html-icon.svg"}
          width={40}
          height={40}
          priority
          alt="html"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Advanced
          </span>
        </div>
      </div>
      <div className="skill group ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">
          Javascript
        </h1>
        <Image
          src={"/Tech/javascript-programming-language-icon.svg"}
          width={40}
          height={40}
          priority
          alt="Javascript"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Advanced
          </span>
        </div>
      </div>{" "}
      <div className="skill group  ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">CSS3</h1>
        <Image
          src={"/Tech/css-icon.svg"}
          width={40}
          height={40}
          priority
          alt="css"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Advanced
          </span>
        </div>
      </div>
      <div className="skill group  ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">
          Sass / Scss
        </h1>
        <Image
          src={"/Tech/sass-icon.svg"}
          width={60}
          height={60}
          priority
          alt="sass"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Advanced
          </span>
        </div>
      </div>
      <div className="skill group ">
        <h1 className="py-2 font-Roboto font-thin md:text-2xl text-xl">PHP</h1>
        <Image
          src={"/Tech/php-programming-language-icon.svg"}
          width={80}
          height={80}
          priority
          alt="php"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Beginner
          </span>
        </div>
      </div>
      <div className="skill group  ">
        <h1 className="py-2 font-Roboto font-thin md:text-2xl text-xl">
          Typescript
        </h1>
        <Image
          src={"/Tech/typescript-programming-language-icon.svg"}
          width={40}
          height={40}
          priority
          alt="php"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Beginner
          </span>
        </div>
      </div>
      <div className="skill group  ">
        <h1 className="py-2 font-Roboto font-thin md:text-2xl text-xl">
          Python
        </h1>
        <Image
          src={"/Tech/python-svgrepo-com.svg"}
          width={40}
          height={40}
          priority
          alt="python"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Beginner
          </span>
        </div>
      </div>
      <div className="skill group  ">
        <h1 className="py-2 font-Roboto font-thin md:text-2xl text-xl">C++</h1>
        <Image src={"/Tech/c.svg"} width={40} height={40} priority alt="c++" />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Beginner
          </span>
        </div>
      </div>
      <div className="skill group  ">
        <h1 className="py-2 font-Roboto font-thin md:text-2xl text-xl">Java</h1>
        <Image
          src={"/Tech/java-svgrepo-com.svg"}
          width={40}
          height={40}
          priority
          alt="java"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Beginner
          </span>
        </div>
      </div>
      <div className="skill group  ">
        <h1 className="py-2 font-Roboto font-thin md:text-2xl text-xl">
          NodeJS
        </h1>
        <Image
          src={"/Tech/nodejs-icon-svgrepo-com.svg"}
          width={40}
          height={40}
          priority
          alt="java"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Advanced
          </span>
        </div>
      </div>
    </div>
  );
}

export default Tech;
