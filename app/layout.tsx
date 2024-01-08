import { Inter } from "next/font/google";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div>
          <Navbar />
          {children}
          <Contact />
          <Footer />
        </div>
      </body>
    </html>
  );
}
