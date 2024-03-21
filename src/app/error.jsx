"use client";

import { useEffect } from "react";

const Error = ({ error, reset }) => {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className='text-center mt-10'>
      <h1>Something went wrong. Please try again later.</h1>
      <button className="hover:text-red-600 p-3 border rounded-lg mt-4" onClick={() => reset()}>
        Try again
      </button>
    </div>
  );
};

export default Error;
