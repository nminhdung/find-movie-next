import React from "react";
import MenuItem from "./MenuItem";
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4 items-center">
        <MenuItem title="home" path="/" Icon={AiFillHome} />
        <MenuItem title="about" path="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <Link href={"/"} className="flex items-center gap-2">
        <span className="text-2xl font-bold bg-red-500  py-1 px-2 rounded-lg">
          IMDb
        </span>
        <span className='text-xl'>Movie</span>
      </Link>
    </div>
  );
};

export default Header;
