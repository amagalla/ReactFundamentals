import React from "react";
import "../../styles/albums.scss";

// thumbnailUrl
// title

const DisplayAlbums = ({ searchInput, albumData }) => {
  const albums = albumData
    .filter((element) => {
      if (searchInput === "") {
        return element;
      } else if (
        element.title.toLowerCase().includes(searchInput.toLowerCase())
      ) {
        return element;
      }
    })
    .map((el, i) => {
      return (
        <div className='album_items' key={i}>
          <img src={el.thumbnailUrl} alt='Album Picture' />
          <p>{el.title}</p>
        </div>
      );
    });

  return <div className='display_albums_container'>{albums}</div>;
};

export default DisplayAlbums;
