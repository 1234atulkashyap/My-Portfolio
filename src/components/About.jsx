import React from "react";
import notebookM from "../assets/notebookM.png";

import mobileR from "../assets/mobileR.png";

const About = () => {
  return (
    <div
      className="text-white gap-4 max-w-[1200px] mx-auto grid md:grid-cols-3"
      id="about"
    >
      <div className="md:col-span-2 glass md:py-16 my-auto text-left p-4">
        <div className="mx-auto max-w-[80%] md:max-w-[60%]">
          <h2 className="text-3xl font-bold mb-4">
            {" "}
            Responsive and Accessible Design
          </h2>
          <p className="text-gray-200">
            I am adept at creating responsive designs that provide a seamless
            user experience across a variety of devices, including desktops,
            tablets, and mobile phones. Utilizing media queries, flexible grid
            layouts, and responsive images, I ensure that each project is
            optimized for different screen sizes and resolutions.{" "}
          </p>
        </div>
      </div>

      <div className="hidden md:block md:col-span-1 glass overflow-hidden">
        <img
          className="w-[200px] md:w-[500px] absolute "
          src={notebookM}
          alt=""
          loading="lazy"
        />
      </div>

      <div className="hidden md:block md:col-span-1 glass overflow-hidden">
        <img
          className="w-[200px] md:w-[500px] absolute "
          src={mobileR}
          alt=""
          loading="lazy"
        />
      </div>

      <div className="md:hidden relative overflow-hidden h-[200px] glass">
        <img
          className=" absolute w-[400px] "
          src={notebookM}
          alt=""
          loading="lazy"
        />
        <img
          className="  absolute w-[200px] right-0  "
          src={mobileR}
          alt=""
          loading="lazy"
        />
      </div>

      <div className="md:col-span-2 glass md:py-16 p-4  ">
        <div className="mx-auto max-w-[80%]">
          <h2 className="text-3xl font-bold mb-4">
            Continuous Learning and Development{" "}
          </h2>
          <p className="text-gray-200">
          I am committed to staying updated with the latest industry trends and best practices by regularly reading technical blogs, watching conference talks, and following influential developers on social media. This proactive approach ensures that I remain informed about cutting-edge developments and continuously enhance my skills{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
