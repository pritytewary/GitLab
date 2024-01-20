"use client";

import React from "react";

const Platform = () => {
  return (
    <div className="flex  		  items-center bg-gray-900 bg-opacity-100 gap-3 lg:h-[80vh] px-24 	">
      <div className=" flex flex-col max-w-2xl  space-y-3 ">
        <h1 className="text-3xl text-current  ">The most comprehensive</h1>
        <p className=" lg:text-5xl font-bold  text-5xl text-white">
          AI-powered DevSecOps Platform
        </p>
        <p className="text-xl">
          Deliver better software faster with one platform for your entire
          software development lifecycle (SDLC){" "}
        </p>
        <a href="">
          <button className=" bg-white px-4 py-2 text-black text-lg font-bold  rounded-md">
            Get free trial
          </button>
        </a>
      </div>
    </div>
  );
};

export default Platform;
