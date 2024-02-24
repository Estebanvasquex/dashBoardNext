import Image from "next/image";
import React from "react";
import { FaAngular, FaReact, FaVuejs } from "react-icons/fa";
import path from "path";
import { SiJquery, SiPreact, SiSvelte } from "react-icons/si";
import { SidebarMenuItem } from "./commonts/sidebar-menu-item/SidebarMenuItem";

const menuItems = [
  {
    path: "/dashboard/counter",
    icon: <FaReact />,
    title: "React",
    subTitle: "Framework para front-end",
  },
  {
    path: "/dashboard/main",
    icon: <FaAngular />,
    title: "Angular",
    subTitle: "Framework para front-end",
  }
];

export const Sidebar = () => {
  debugger;
  return (
    <div
      id="menu"
      style={{ width: "400px" }}
      className="bg-gray-900 min-h-screen z-10 text-slate-300 w-64 first-letter:left-0 h-screen overflow-y-scroll"
    >
      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-white">
          <FaReact className="mr-2" />
          <span>Dash</span>
          <span className="text-blue-500">8</span>.
        </h1>
        <p className="text-slate-500 text-sm">
          Manage your actions and activities
        </p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Welcome back,</p>
        <a href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c"
              alt="User Avatar"
              width={20}
              height={40}
            />
          </span>
          <span className="text-sm md:text-base font-bold">Edward Tompson</span>
        </a>
      </div>
      <div id="nav" className="w-full px-6">
        {/* DADO QUE LAS PROPIEDADES TIENEN EL MISMO NOMBRE SE PUEDE DESESTRUCTRURAR ASÍ */}
        {
          menuItems.map((item, index) => (
            <SidebarMenuItem key={index} {...item}/>
          ))  
        }

      </div>
    </div>
  );
};
