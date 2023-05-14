import React from "react";
import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";
function Footer() {
  return (
    <footer
      className="bg-gradient-to-r 
  w-full from-slate-800 to-cyan-500 py-3 px-4 text-white relative"
    >
      <div>
        <h2 className="text-3xl font-semibold ">Portfolio</h2>
      </div>

      <div className="">
        <h3 className="text-2xl pt-8 text-center font-thin">Sosial Media</h3>
        <div className="flex justify-center items-center mt-3 gap-x-10">
          <button>
            <BsGithub className="text-3xl " />
          </button>
          <button>
            <BsTwitter className="text-3xl " />
          </button>
          <button>
            <BsLinkedin className="text-3xl fa-brands fa-linkedin" />
          </button>
        </div>
      </div>
      <div className="text-center mt-10">
        <p>Copyright by &copy; Bilal Syahputra</p>
      </div>
    </footer>
  );
}

export default Footer;
