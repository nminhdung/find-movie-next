import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import SearchBox from "@/components/SearchBox";
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
    <html suppressHydrationWarning lang="en" className='dark' style={{ colorScheme: 'dark' }} >
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar/>
          <SearchBox/>
          {children}
        </Providers>
      </body>
    </html>
  );
}
