"use client";
import Link from "next/link";
import React from "react";
import { useSearchParams } from "next/navigation";

const NavbarItem = ({ title, param }) => {
  const searchParams = useSearchParams();
  const genere = searchParams.get("genre");
  
  return (
    <Link
      href={`/?genre=${param}`}
      className={`hover:text-red-600 transition-all duration-300 ${
        genere === param
          ? "underline underline-offset-8 decoration-4 decoration-red-500 rounded-lg"
          : ""
      }`}
    >
      {title}
    </Link>
  );
};

export default NavbarItem;
