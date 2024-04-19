import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import Banner from "./components/ui/Banner/Banner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hello Dinajpur",
  description: "Directory of Dinajpur",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {/* <Banner></Banner> */}
        <main className="bg-green-300">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
