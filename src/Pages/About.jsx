import React from "react";
import { skills } from "../Constants";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="absolute top-12 py-4 p-2">
      <div className="intro ">
        <h1 className="font-semibold text-4xl sm:text-6xl md:text-7xl lg:text-8xl">
          Hello, I'm <span className="text-textOne">Krishna</span>
        </h1>
        <div className="text-2xl font-normal mt-8 leading-10 md:text-3xl lg:text-4xl ">
          Despite my relatively fresh journey in the tech world, I bring a
          unique blend of enthusiasm, adaptability, and a knack for
          problem-solving. My coding journey began with a curiosity that quickly
          evolved into a dedicated exploration of the MERN (MongoDB, Express.js,
          React, Node.js) stack.
        </div>
      </div>
      <div className="skillsContainerflex mt-6 py-5 flex-wrap gap-12 flex">
        {skills.map((skill) => (
          <div className="rounded-xl shadow-lg flex justify-around items-center w-20 h-20 hover:scale-125 duration-150 cursor-pointer">
            <img
              src={skill.imageUrl}
              alt={skill.name}
              className="aspect-square "
            />
          </div>
        ))}
      </div>
      <div className="ctaContainer flex justify-around">
        <p className="text-2xl font-normal mt-4  md:text-3xl lg:text-4xl ">
          Have a project in mind?{" "}
          <span className="text-textOne">Let's build something together !</span>
          <Link
            to="/contact"
            className="block m-auto w-fit bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-2 mt-2 hover:scale-125 duration-200 font-normal"
          >
            Let's Build together
          </Link>
        </p>
      </div>
    </section>
  );
};

export default About;
