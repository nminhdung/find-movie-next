import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Find movie clone",
  description: "This is a small website to find movie",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
