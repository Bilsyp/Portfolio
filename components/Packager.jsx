import Image from "next/image";
function Packager() {
  return (
    <div className="Tech p-8 flex justify-around items-center flex-col md:flex-row flex-wrap gap-y-8  ">
      <div className="rounded-xl group relative overflow-hidden flex-col-reverse py-4 px-5 box w-52 flex justify-center items-center  ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">Npm</h1>
        <Image
          src={"/Tech/npm-icon.svg"}
          width={70}
          height={70}
          priority
          alt="npm"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Advanced
          </span>
        </div>
      </div>
      <div className="rounded-xl group relative overflow-hidden flex-col-reverse py-4 px-5 box w-52 flex justify-center items-center  ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">Pnpm</h1>
        <Image
          src={"/Tech/light-pnpm-svgrepo-com.svg"}
          width={40}
          height={40}
          priority
          alt="pnpm"
        />
        <div className="absolute -bottom-32  group-hover:bottom-0 duration-300 w-full h-full flex justify-center items-center boxs text-white">
          <span className="font-bold text-xl font-Roboto tracking-widest">
            Beginner
          </span>
        </div>
      </div>
      <div className="rounded-xl group relative overflow-hidden flex-col-reverse py-4 px-5 box w-52 flex justify-center items-center  ">
        <h1 className="py-2 text-xl font-Roboto font-thin md:text-2xl">Yarn</h1>
        <Image
          src={"/Tech/yarn-svgrepo-com.svg"}
          width={45}
          height={45}
          priority
          alt="pnpm"
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

export default Packager;
