import React from "react";
import "../styles/home.scss";
import DenoMilkTea from "../assets/denoMilkTea.gif";

const Home = () => {
  return (
    <div className="home_container">
      <div className="home_content">
        <h1>Welcome</h1>
        <img src={DenoMilkTea} alt="Deno Drinking Milk Tea" />
      </div>
    </div>
  );
};

export default Home;
