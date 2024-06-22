// import { jura } from "./Fonts";
import Image from "next/image";
import Link from "next/link";
import "../globals.css";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";
// import { usePathname } from "next/navigation";
import 'remixicon/fonts/remixicon.css'



export const metadata = {
  title: "Online Vendor Store",
  description: "Boost your Business & go digital with  our online vendor Stall",
};

export default function RootLayout({ children }) {

 
  return (
    <html lang="en">
      <body >
        <Nav />
        {children}
        <Footer />
        </body>
    </html>
  );
}
