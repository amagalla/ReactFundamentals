import React from "react";
import "../styles/home.scss";
import DenoMilkTea from "../assets/denoMilkTea.gif";

const Home = () => {
  return (
    <div className='home_container'>
      <h1>This is the Homepage</h1>
      <img src={DenoMilkTea} alt='Deno Drinking Milk Tea' />
    </div>
  );
};

export default Home;
