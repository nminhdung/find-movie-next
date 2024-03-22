"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchTerm}`);
  };
  return (
    <form className="max-w-6xl mx-auto mt-4" onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row max-w-[200px] gap-2">
        <input
          placeholder="Search keys..."
          type="text"
          className="  py-1 px-4 border-b-2 border-gray-500 outline-none bg-transparent"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          disabled={!searchTerm}
          className="py-1 px-4 border border-red-500 rounded-lg
         enabled:hover:bg-red-500 enabled:hover:border-white enabled:hover:text-white 
         transition-all duration-300 disabled:opacity-50"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
