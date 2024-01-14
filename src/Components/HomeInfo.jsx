import React from "react";
import { Link } from "react-router-dom";
import arrow from "../assets/icons/arrow.svg";
const InfoBox = ({ text, link, btnText }) => (
  <div className="infoText bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-2">
    <p className="font-normal- sm:text-xl text-center">{text}</p>
    <Link to={link} className="flex justify-around">
      <span className="text-center w-fit mt-1 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
        {btnText}
      </span>
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center py-4 px-8 text-slate-50 mx-5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl">
      Hi,I am <span className="font-semibold">Krishna 👋 </span>
      <br></br>A passionate coder building skills
    </h1>
  ),
  2: (
    <InfoBox
      text={"Worked with many projects and picked up many skills along the way"}
      link={"/about"}
      btnText={"Learn more"}
    />
  ),
  3: (
    <InfoBox
      text={"Looking for dev to collab ❓ I'm just a few keystrokes away"}
      link={"/contact"}
      btnText={"Let's talk"}
    />
  ),
  4: (
    <InfoBox
      text={
        "Made various projects across the domains with a variety of tech Stack used"
      }
      link={"/projects"}
      btnText={"View Projects"}
    />
  ),
};
const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null;
};

export default HomeInfo;
