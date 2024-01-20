"use client";

import Starsvg from "../public/c843cb.svg";
import Image from "next/image";
import Gitpng from "../public/gitlab-logo-500.png";
import { IoSearchSharp } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import Link from "next/link";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownSection,
  DropdownItem,
  Button,
} from "@nextui-org/react";

const NavBar = () => {
  return (
    <div className="  flex flex-col  ">
      <div className=" bg-gray-200 lg:hidden flex flex-col text-xl font-medium py-1 ">
        <h1>GitLab Duo code suggestions now available</h1>
        <a href="" className="text-purple-700 underline">
          Learn More
        </a>
      </div>
      <div className="bg-gray-950 text-lg font-bold text-white lg:flex justify-center space-x-5 h-14 items-center hidden  ">
        <Image src={Starsvg} />
        <h1>GitLab Duo Code Suggestions now available </h1>
        <a href="" className="underline ">
          Learn more →
        </a>
        <Image src={Starsvg} />
      </div>
      <div className="w-full bg-gray-950 py-1 text-white flex lg:hidden items-center justify-center">
        Get free trial
      </div>
      <div className="flex  justify-between  px-4 h-20 bg-white items-center text-lg  ">
        <div className="flex space-x-6 items-center ">
          <Link href="/">
            <Image src={Gitpng} className="h-16 w-16" />
          </Link>
          <div className="lg:flex items-center gap-6 hidden">
            <Link href="/whygitlab">Why GitLab</Link>
            <Link href="/platform">Platform</Link>
            <Dropdown>
              <DropdownTrigger>
                <Button variant="bordered">Solutions</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions">
                <DropdownItem key="new">New file</DropdownItem>
                <DropdownItem key="copy">Copy link</DropdownItem>
                <DropdownItem key="edit">Edit file</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete file
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Link href="">Pricing</Link>
            <Link href="">Resources</Link>
            <Link href="">Company</Link>
            <Link href="">Contact us</Link>
          </div>
        </div>
        <div className="lg:flex space-x-6 items-center mr-4 hidden  ">
          <a href="">
            <IoSearchSharp size={20} />
          </a>
          <a href="">
            <button className=" bg-black px-4 py-3 text-white text-lg font-bold hover:bg-white hover:text-black border-2 border-black">
              Get free trial
            </button>
          </a>
          <a href="">Sign in</a>
        </div>
        <div className="lg:hidden flex ">
          {" "}
          <IoIosMenu size={30} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
