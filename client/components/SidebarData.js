import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

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
  {
    title: "Crud",
    path: "/crud",
    icon: <FaIcons.FaDatabase size={24} />,
  },
  {
    title: "CSS",
    path: "/css-challenge",
    icon: <SiIcons.SiCss3 size={24} />,
  },
];
