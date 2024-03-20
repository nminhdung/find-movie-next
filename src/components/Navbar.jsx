import React from "react";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  return (
    <div className='w-full  dark:bg-gray-900 bg-red-300'>
      <div className="max-w-6xl mx-auto flex items-center justify-center p-4 gap-4 lg:text-xl">
        <NavbarItem title='Trending' param={'fetchTrending'}/>
        <NavbarItem title='Top Rated' param={'fetchTopRated'}/>
      </div>
    </div>
  );
};

export default Navbar;
