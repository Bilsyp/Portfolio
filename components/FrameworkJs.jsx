import Image from "next/image";
function FrameworkJs() {
  return (
    <div className="Tech p-8 flex justify-around items-center flex-col md:flex-row flex-wrap gap-y-8  ">
      <div className="skill group ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">
          ReactJS
        </h1>
        <Image
          src={"/Tech/react-js-icon.svg"}
          width={40}
          height={40}
          priority
          alt="reactjs"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Advanced
          </span>
        </div>
      </div>
      <div className="skill group ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">
          NextJS
        </h1>
        <Image
          src={"/Tech/nextjs-fill-svgrepo-com.svg"}
          width={40}
          height={40}
          priority
          alt="nextjs"
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

export default FrameworkJs;
