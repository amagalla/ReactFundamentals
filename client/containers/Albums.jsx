import React, { useState, useEffect } from "react";
import AlbumsTitle from "../components/Albums/AlbumsTitle";
import SearchAlbumsInput from "../components/Albums/SearchAlbumInput";
import DisplayAlbums from "../components/Albums/DisplayAlbums";

const url = "https://jsonplaceholder.typicode.com/photos";

const SearchAlbums = () => {
  // save onChange state
  const [searchInput, setSearchInput] = useState("");
  const [albumData, setAlbumData] = useState([]);

  // save fetch request state
  useEffect(async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setAlbumData(data.filter((element, i) => i < 10));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <AlbumsTitle />
      <SearchAlbumsInput onChange={(result) => setSearchInput(result)} />
      <DisplayAlbums searchInput={searchInput} albumData={albumData} />
    </>
  );
};

export default SearchAlbums;
