import React from "react";

function Projects() {
  return (
    <section className="my-10 p-8">
      <div className="sm:md-w-xl ">
        <h2 className="text-3xl md:text-4xl lg:text-4xl font-semibold">
          {" "}
          Latest Project I have Created
        </h2>
        <p className="leading-8 py-4 text-gray-600 text-lg sm:text-xl md:text-2xl lg:text-3xl">
          I have created several websites such as{" "}
          <span className="text-cyan-500">landing pages</span>,
          <span className="text-cyan-500">e-commerce web apps</span> and others
        </p>
      </div>

      <div className="mt-10 projects flex flex-col justify-center items-center gap-y-10 sm:flex-row sm:gap-x-10">
        <div
          style={{ backgroundImage: 'url("../game.jpg") ' }}
          className="box bg-cover img1 h-80 w-80 relative rounded-xl bg-center text-white group overflow-hidden "
        >
          <div className="absolute boxs h-full w-full group-hover:top-10 duration-300 top-80 left-0 text-center">
            <h3 className="py-3  px-2 text-2xl">Landing Page Game Site</h3>
            <p className="text-sm font-md leading-8 py-4">
              We have <span className="text-cyan-500">successfully</span>{" "}
              created a captivating landing page for the game, which is designed
              to attract potential players and give them a sneak peek into the
              game's world.
            </p>
            Hello World
          </div>
        </div>

        <div
          style={{ backgroundImage: 'url("../shopping.jpg") ' }}
          className="box bg-cover img2 h-80 w-80 relative rounded-xl bg-center text-white group overflow-hidden "
        >
          <div className="absolute boxs h-full w-full group-hover:top-10 duration-300 top-80 left-0 text-center">
            <h3 className="py-3  px-2 text-2xl">
              we have finished creating an e-commerce website
            </h3>
            <p className="text-sm font-md leading-8 py-4">
              We are proud to announce that we have{" "}
              <span className="text-cyan-500">successfully</span> completed the
              development of an e-commerce website that is ready to serve
              customers worldwide.
            </p>
          </div>
        </div>

        <div
          style={{ backgroundImage: 'url("../sale.jpg") ' }}
          className="box bg-cover img3 h-80 w-80 relative rounded-xl bg-center text-white group overflow-hidden "
        >
          <div className="absolute pro h-full w-full group-hover:top-10 boxs duration-300 top-80 left-0 text-center">
            <h3 className="py-3  px-2 text-2xl">AI And VR Technology</h3>
            <p className="text-md font-thin leading-8 py-4">
              We have <span className="text-cyan-500">successfully</span>{" "}
              completed the development of an AI and VR app website.Our website
              features a seamless integration of advanced AI and VR technology,
              providing users with a unique and immersive experience. .
            </p>
          </div>
        </div>

        {
          // Project
        }
      </div>
    </section>
  );
}

export default Projects;
