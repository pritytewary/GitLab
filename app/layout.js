import { Inter } from "next/font/google";
import "./globals.css";
import Navpage from "@/components/page";

import App from "./_app";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>
          <div className="flex flex-col   min-h-screen w-full ">
            <Navpage />
            <div className="  flex-grow overflow-y-auto bg-gray-700 text-white h-full   ">
              {children}
            </div>
          </div>
        </App>
      </body>
    </html>
  );
}
