import React from "react";
import { BsFillSendFill } from "react-icons/bs";

function Contact() {
  return (
    <section className="my-10 ">
      <div className="bg-white dark:bg-gray-300 p-8 mx-auto box w-4/5 h-50 rounded-xl text-center ">
        <h2 className="text-2xl md:text-3xl lg:text-4xl pt-3 font-semibold dark:text-cyan-500">
          Contact Me Below
        </h2>

        <div className="form-control mt-10">
          <input
            placeholder="Type Email Here..."
            type="email"
            className="w-full focus:px-3 bg-transparent focus:scale-105 duration-200 outline-none border-b-2 border-cyan-500 py-2"
          />
          <button className="bg-gradient-to-r from-slate-600 to-cyan-500 text-white px-10 py-2 rounded-xl mx-auto block my-10">
            <BsFillSendFill className="text-3xl fa-solid fa-paper-plane" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
