import React from "react";
import { TiHtml5 } from "react-icons/ti";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoCss3 } from "react-icons/io5";
import { LiaJava } from "react-icons/lia";
import { FaBootstrap } from "react-icons/fa";






const Skills = () => {
  return (
    <div className="text-white max-w-[1200px] mx-auto glass p-5 mb-5 "id="skill">
       <h2 className="text-3xl font-semibold mb-4">Skills</h2>
       <div className="flex flex-wrap gap-5">
      <div className="text-8xl"> <TiHtml5 color="#E76235" /></div>
      <div className="text-8xl"> <IoLogoCss3 color="#399ADD" /></div>
      <div className="text-8xl"> <FaBootstrap color="#814CF6" /></div>
      <div className="text-8xl"> <LiaJava color="#E76235" /></div>
      <div className="text-8xl"> <RiJavascriptFill color="#F0DC51" /></div>
      <div className="text-8xl"><BiLogoTailwindCss color="#4ABEF8" /></div>
      <div className="text-8xl"><FaReact color="#61DBFA" /></div>
       </div>
    </div>
  );
};

export default Skills;
