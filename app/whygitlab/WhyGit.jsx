import React from "react";

const WhyGit = () => {
  return (
    <div className="flex  overflow-x-scroll		  items-center bg-gray-900 bg-opacity-100 gap-3 lg:h-[70vh] px-24 	">
      <div className=" flex flex-col max-w-2xl  space-y-3 ">
        <h1 className="text-3xl text-current  ">10 Reasons Why</h1>
        <p className=" lg:text-8xl font-medium  text-5xl text-white">
          enterPrises choose GitLab
        </p>
        <p className="text-xl">
          GitLab is the most comprehensive AI powered DevSecOps platform
        </p>
        <a href="">
          <button className=" bg-white px-4 py-2 text-black text-lg font-bold  rounded-md">
            Try Unlimited for free
          </button>
        </a>
      </div>
    </div>
  );
};

export default WhyGit;
