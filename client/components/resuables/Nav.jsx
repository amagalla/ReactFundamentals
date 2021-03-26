import React, { useState } from "react";
import * as IoIcons from "react-icons/io";
import * as GiIcons from "react-icons/gi";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "../SidebarData";
import "../../styles/navbar.scss";
import { useHistory } from "react-router-dom";

const Nav = () => {
  const [navToggle, setNavToggle] = useState(false);

  let history = useHistory();

  const handleClick = () => {
    setNavToggle((data) => !data);
  };

  const sideDataClick = (path) => {
    history.push(path);
  };

  const sideData = SidebarData.map((item, i) => {
    return (
      <div
        key={i}
        className="sidebar_item"
        onClick={() => sideDataClick(item.path)}
      >
        <p>{item.title}</p>
        {item.icon}
      </div>
    );
  });

  return (
    <div className="nav_container">
      <div className="burger_icon_container">
        <GiIcons.GiHamburgerMenu size={32} onClick={handleClick} />
      </div>
      <div className="nav_webpage_icon">
        <IoIcons.IoLogoOctocat size={32} />
      </div>
      <div className="nav_title">
        <p>React Fundamentals</p>
      </div>
      <div
        className={navToggle ? "sidebar_container active" : "sidebar_container"}
      >
        <div className="close_nav_icon">
          <span>
            <AiIcons.AiOutlineClose size={32} onClick={handleClick} />
          </span>
        </div>
        <div className="items_container" onClick={handleClick}>
          {sideData}
        </div>
      </div>
    </div>
  );
};
export default Nav;
