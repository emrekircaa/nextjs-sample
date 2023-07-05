"use client";
import React, { useState, useEffect, use } from "react";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import SideMenu from "@/components/SideMenu";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [urlname, setUrlName] = useState(pathname);
  useEffect(() => {
    setUrlName(pathname);
  }, [pathname]);

  return (
    <html>
      <head></head>
      <body suppressHydrationWarning={true}>
        <ToastContainer />

        {urlname == "/login" ? (
          <div className="">
            <SideMenu isShow={false} />
            <div className=" w-full">
              <Navbar isShow={false} />
              <div>{children}</div>
            </div>
          </div>
        ) : (
          <div className="">
            <SideMenu isShow={true} />
            <div className="pl-[270px]  w-full">
              <Navbar isShow={true} />
              <div>{children}</div>
            </div>
          </div>
        )}
      </body>
    </html>
  );
}
{
}
