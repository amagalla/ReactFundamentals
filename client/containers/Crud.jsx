import React, { useState, useEffect } from "react";
import "../styles/crud.scss";

const Crud = () => {
  const [inputItem, setInputItem] = useState("");
  const [requestedItem, setRequestedItem] = useState([]);

  // updates state with on change in input field
  const handleChange = (e) => {
    setInputItem(e.target.value);
  };

  // on submit to post item to database
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/list/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ show: inputItem }),
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));

    setInputItem("");
  };

  // on click to delete item
  const handleClick = (id) => {
    fetch(`http://localhost:3000/list/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .catch((err) => console.log(err));
  };

  //   {id: 54, show: "SAO"}

  // use effect to get request from database
  useEffect(async () => {
    try {
      const res = await fetch("http://localhost:3000/list/");
      const data = await res.json();
      setRequestedItem(data);
    } catch (err) {
      console.log(err);
    }
  });

  // map through reponse from getting data
  const resData = requestedItem.map((el, i) => {
    return (
      <div className='list_data_item' key={i}>
        <p>{el.show}</p>
        <button onClick={() => handleClick(el.id)}>X</button>
      </div>
    );
  });

  return (
    <div className='crud_container'>
      <div className='crud_title'>
        <h1>Crud App</h1>
      </div>
      <div className='form_container'>
        <form onSubmit={handleSubmit}>
          <input type='text' value={inputItem || ""} onChange={handleChange} />
          <input type='submit' />
        </form>
      </div>
      <div className='list_data_container'>{resData}</div>
    </div>
  );
};

export default Crud;
