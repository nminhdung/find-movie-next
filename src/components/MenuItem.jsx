import Link from "next/link";
import React from "react";

const MenuItem = ({ title, path, Icon }) => {
  return (
    <Link href={path} className='hover:text-red-600 transition-all duration-200'>
      <Icon className='text-2xl sm:hidden' />
      <p className='uppercase hidden sm:inline-block'>{title}</p>
    </Link>
  );
};

export default MenuItem;
