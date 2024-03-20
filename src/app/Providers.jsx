"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

const Providers = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <div
        className="dark:text-gray-200 
      dark:bg-gray-950 text-gray-950 min-h-screen select-none transition-colors duration-200"
      >
        {children}
      </div>
    </ThemeProvider>
  );
};

export default Providers;
