import React from "react";

import proj1 from "../assets/proj1.png";
import proj2 from "../assets/proj2.png";

const projects = [
  { id: 1, img: proj1, title: "Youtube Clone", liveUrl: "https://youtube-clone-iota-two.vercel.app/" },
  { id: 2, img: proj2, title: "CarHub", liveUrl: "https://car-hub-gamma-gules.vercel.app/" },
];

const Work = () => {



  return (
    <div className="mx-auto max-w-[1200px] grid grid-cols-2 gap-8 glass p-6 m-5" id="work">
      <div className="col-span-2 my-2 md:my-4">
        <h1 className="text-4xl mb-2 md:mb-4 text-gray-300">My work</h1>
      </div>
      {projects.map((items) => {
        return (
          <div
            key={items.id}
            className="glass  transition-all   hover:scale-105  duration-300 overflow-hidden shadow-xl   md:h-[200px] relative group text-green-400 "
          >
            <div className="hover:blur-[1px] transition-all duration-300"   >
              <img
                className="w-full h-full object-cover "
                src={items.img}
                alt=""
                loading="lazy"
              />
            </div>

            <div className="flex flex-col items-center justify-center gap-2 md:gap-5   opacity-0 group-hover:opacity-100 bottom-[-15px] md:bottom-[-25px] right-8 group-hover:bottom-5 absolute duration-300  transition-all  ">
              <span className="text-2xl font-bold">{items.title}</span>
              <div>
                <a
                  className="bg-white px-5 py-2 rounded-xl font-bold"
                  href={items.liveUrl}
                >
                  Link
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};




export default Work;
