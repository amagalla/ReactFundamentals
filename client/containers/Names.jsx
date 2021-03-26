import React from "react";
import "../styles/names.scss";
import InputNames from "../components/Names/InputNames";

const Names = () => {
  return (
    <>
      <div className='name_title_container'>
        <h1>Type Your Name</h1>
      </div>
      <InputNames />
    </>
  );
};

export default Names;
