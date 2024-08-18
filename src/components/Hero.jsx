import React from "react";
import heroImage from "../assets/profilepic.png";
import notebookL from "../assets/notebookL.png";
import mobileR from "../assets/mobileR.png";
import notebookM from "../assets/notebookM.png";


import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="relative grid md:grid-cols-3 gap-10 max-w-[1200px]  md:h-[55vh] lg:h-[60vh] 2xl:h-[30vh] mx-auto py-8 overflow-hidden" id="home">
      <img className="block md:hidden lg:block absolute z-[-1] w-[400px] bottom-0 left-[-170px]" src={notebookL} alt="" />
      <img className="block md:hidden lg:block absolute  z-[-1] w-[400px] left-[0px] bottom-0 mdleft-[320px]" src={notebookM} alt="" />
      <img className=" absolute z-[-1] w-[200px] bottom-[500px] left-[450px]" src={mobileR} alt="" />



      <div className="glass md:w-[1000px] lg:w-[1200px] px-3 col-span-2 my-auto mt-5 z-[-1] p-5 ">
        <h1 className="text-white text-3xl md:text-5xl lg:text-7xl font-extrabold  md:p-7 pl-0 sm:pl-7">
          <p className=" text-gray-300 mb-3">I`m a </p>
          <TypeAnimation 
          sequence={[
            "FullStack Developer", 1000, 
            "web Designer", 1000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          />
        </h1>
        <p className="font-bol my-3 md:my-6 md:text-lg lg:text-xl max-w-[165px] sm:max-w-[600px] ml-1 text-gray-300 z-10 sm:pl-7 ">My name is Atul kumar kashyap</p>
      </div> 

      <div className="absolute w-72 right-[-70px] sm:right-0 sm:w-80 sm:bottom-8 md:w-[400px] md:top-[-15px] lg:w-[500px] lg:top-[-60px]  ">
        <img  src={heroImage} alt="" />
      </div>
    </div>
  );
};

export default Hero;

//bottom-8 md:bottom-[70px] lg:bottom-5 right-[-50px] md:right-0 max-w-[270px] sm:max-w-[250px] md:max-w-[380px] lg:max-w-[450px] mx-auto z-[-1]
