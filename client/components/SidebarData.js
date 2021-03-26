import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome size={24} />,
  },
  {
    title: "Albums",
    path: "/albums",
    icon: <BiIcons.BiAlbum size={24} />,
  },
  {
    title: "Names",
    path: "/names",
    icon: <BsIcons.BsPeopleCircle size={24} />,
  },
];
