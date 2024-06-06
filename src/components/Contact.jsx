import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Contact = () => {
  const inlineStyle = () => {
    return {
      background:
        "linear-gradient(111deg, rgba(238,113,113,1) 1%, rgba(246,215,148,1) 1%, rgba(0,212,255,1) 85%)",
    };
  };

  return (
    <div className=" max-w-[1200px] mx-auto glass" id="contact">
      <div className="p-6 flex items-center justify-center flex-col">
        <h2 className="text-gray-400 text-3xl md:text-5xl mb-4 font-bold">
          Let`s Connect
        </h2>
        <p className="text-gray-400 text-xl">
          You can contact me using:
        </p>
      </div>

      <div className="items-center justify-center flex flex-col">
        <div className="flex gap-10  md:gap-14 my-1 md:my-3 p-2   ">
          <a href="https://github.com/1234atulkashyap" target="_blank">
            <AiFillGithub
              className="rounded-full p-2"
              size={55}
              style={inlineStyle()}
            />
          </a>
          <a href="https://twitter.com/AtulKas70198872" target="_blank">
            <AiFillTwitterCircle
              className="rounded-full p-2"
              size={55}
              style={inlineStyle()}
            />
          </a>
          <a href="https://www.linkedin.com/in/atul-kumar-kashyap-0491ab236/" target="_blank">
            <AiFillLinkedin
              className="rounded-full p-2"
              size={55}
              style={inlineStyle()}
            />
          </a>
        </div>

        <div className="p-6 w-[100%] md:w-[70%] max-w-[80%] flex-col">
          <h1 className="mb-4 text-2xl font-bold text-gray-400">Ready to get started</h1>
          <form action="https://getform.io/f/eapdprma" method="POST">
            <div className="flex flex-col gap-5">
              <input className=" w-[100%] px-4 py-2 border border-gray-400 rounded-md" type="text" id="name" name="name" placeholder="Name" required />
              <input className="w-[100%] px-4 py-2 border border-gray-400 rounded-md" type="email" id="email" name="email" placeholder="Email" required />
              <input className="hidden" type="hidden" name="_gotcha" ></input>
              <textarea  className="w-[100%] px-4 py-2 border border-gray-400 rounded-md" type="textarea" name="message" id="" cols="30" rows="5" placeholder="Type Your Message"></textarea>
            </div>
            <div  className="md:text-right m-5 ">
              <button className=" px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 ... rounded-md text-gray-800 font-semibold hover:scale-105 transition-all duration-300" type="submit">Send message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
