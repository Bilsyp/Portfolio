import Image from "next/image";
import React from "react";

function Services() {
  return (
    <section className="my-20 ">
      <div className="md:text-center md:mx-auto p-3  max-w-2xl">
        <h2 className="text-3xl font-semibold md:text-3xl lg:text-5xl">
          Services I' offer
        </h2>
        <p className="leading-10 text-xl md:text-2xl text-gray-600 lg:text-3xl">
          I am happy to offer my professional services to assist you with your
          website and design needs. I am dedicated to providing{" "}
          <span className="text-cyan-500">high quality </span>
          work that meets your specific needs.
        </p>
      </div>
      <div className="services mt-10 flex justify-center px-10 flex-col items-center gap-y-10 lg:flex-row lg:gap-x-10">
        <div className="w-96 text-center p-3   h-96 rounded-xl box ">
          <Image
            width={100}
            height={100}
            className="mx-auto"
            alt="code"
            priority
            src={"/icons/code.jpg"}
          />
          <h3 className="pt-8 md:text-xl lg:text-3xl  font-semibold">Code</h3>
          <p className="leading-8 py-4 text-gray-600 text-lg  md:text-xl">
            I specialize in creating websites from scratch using various coding
            languages such as HTML, CSS, JavaScript, PHP, and others. Frameworks
            that I use include ReactJs, Nextjs.
          </p>
        </div>

        <div className="w-96 text-center p-3 h-96 rounded-xl box ">
          <Image
            width={100}
            height={100}
            className="mx-auto"
            alt="design"
            priority
            src={"/icons/respon.png"}
          />
          <h3 className="text-2xl pt-8 md:text-xl lg:text-3xl font-semibold">
            Design
          </h3>
          <p className="leading-8 py-4 text-gray-600 text-lg  md:text-xl ">
            My website design services are customized to suit each client's
            specific needs. I work closely with my customers to understand their
            brand identity, target audience and design preferences to create a
            website that perfectly reflects their business.
          </p>
        </div>

        <div className="w-96 text-center h-96 p-2 rounded-xl box ">
          <Image
            width={100}
            height={100}
            className="mx-auto"
            alt="setting"
            priority
            src={"/icons/setting.jpg"}
          />
          <h3 className="text-2xl pt-8 md:text-xl lg:text-3xl font-semibold">
            consultancy
          </h3>
          <p className="leading-8 py-4 text-gray-600 text-lg  md:text-xl ">
            My web development consulting and troubleshooting services are
            designed to help you solve any website-related issues you may
            encounter. Whether you need assistance with website maintenance,
            updates or bug fixes.
          </p>
        </div>
        {
          //Services
        }
      </div>
      <div
        className="wave h-72 w-full bg-cover  bg-no-repeat"
        style={{ backgroundImage: "url('/icons/wave.svg')" }}
      ></div>
    </section>
  );
}

export default Services;
