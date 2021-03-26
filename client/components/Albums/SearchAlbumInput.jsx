import React from "react";
import "../../styles/albums.scss";

const SearchAlbums = (props) => {
  const handleChange = (e) => {
    props.onChange(e.target.value);
  };

  return (
    <div className="input_container">
      <input type="text" placeholder="Search..." onChange={handleChange} />
    </div>
  );
};

export default SearchAlbums;
