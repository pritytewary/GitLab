import React from "react";
import Image from "next/image";
import Card from "./Card";
import { MdElderly } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

const Home = () => {
  return (
    <div className="flex  overflow-x-scroll		space-x-6  items-center bg-gradient-to-r from-slate-300 to-purple-400 gap-3 lg:h-[80vh] px-24 	">
      <div className=" flex flex-col max-w-lg flex-shrink-0   space-y-3 text-black">
        <h1 className="lg:text-6xl text-5xl  ">Software.Faster.</h1>
        <p className="text-xl">
          GitLab is the most comprehensive AI-powered DevSeOps Platform
        </p>
        <a href="">
          <button className=" bg-black px-4 py-3 text-white text-lg font-bold hover:bg-white hover:text-black border-2 border-black">
            Get free trial
          </button>
        </a>
      </div>

      <Card
        title={
          "Your AI pair programmer, GitLab Duo Code Suggestions is now generally available"
        }
        imageUrl={"/screen-shot.png"}
        isLatestRelease={true}
        buttonText={<>Learn More</>}
      />
      <Card
        title={
          "Industry leaders choose GitLab to build mission-critical software "
        }
        imageUrl={"/hero-1.png"}
        isLatestRelease={false}
        buttonText={"Why GitLab?"}
      />
      <Card
        title={"AI-powered workflows boost efficiency and reduce cycle times"}
        imageUrl={"/hero-2.png"}
        isLatestRelease={false}
        buttonText={"Meet GitLab Duo"}
      />
      <Card
        title={"GitLab named  a Leader forDevOPs Platforms"}
        imageUrl={"/hero-3.png"}
        buttonText={"Read the Report"}
      />

      <div className="flex-shrink-0 space-y-6 ">
        <h1 className="text-5xl text-black font-bold">Get started today</h1>
        <p className="text-black">
          See What your team could do with the AI-powered DevSecOps Platform
        </p>
        <div className="flex space-x-4 ">
          <a href="">
            <button className=" bg-black px-3 py-2 text-white text-lg font-bold hover:bg-white hover:text-black border-2 border-black">
              Get free trial
            </button>{" "}
          </a>
          <a href="" className="flex items-center text-black hover:underline">
            Talk to Tales <IoIosArrowForward />
          </a>
        </div>
      </div>
      <Card imageUrl={"/hero-1.png"} />
    </div>
  );
};

export default Home;
