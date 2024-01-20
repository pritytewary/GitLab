import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
export default function Card({ title, isLatestRelease, imageUrl, buttonText }) {
  return (
    <div className=" py-6 px-6 rounded-lg  max-w-lg space-y-5 bg-gradient-to-r from-transparent to-gray-200 flex-shrink-0 ">
      <Image src={imageUrl} width={500} height={500} className="mb-6" />
      {isLatestRelease ? (
        <a href="" className="bg-purple-500 text-white rounded-xl px-2 py-1 ">
          Latest Release
        </a>
      ) : null}

      <p className="pb-12 mt-1 text-black">{title}</p>
      <a href="" className="flex items-center text-black hover:underline">
        {buttonText} <IoIosArrowForward />{" "}
      </a>
    </div>
  );
}
