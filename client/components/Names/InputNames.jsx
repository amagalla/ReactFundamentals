import React, { useState } from "react";
import "../../styles/names.scss";

const InputNames = () => {
  const [personName, setPersonName] = useState({
    firstname: "",
    lastname: "",
  });

  const [displayName, setDisplayName] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setDisplayName((prevState) => [...prevState, personName]);
    setPersonName({
      firstname: "",
      lastname: "",
    });
  };

  const names = displayName.map((el, i) => {
    return (
      <div className='name_item' key={i}>
        <p>
          {el.firstname} {el.lastname}
        </p>
      </div>
    );
  });

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className='input_names_container'>
          <input
            type='text'
            placeholder='Firstname...'
            name='firstname'
            value={personName.firstname}
            onChange={handleChange}
          />
          <input
            type='text'
            placeholder='Lastname...'
            name='lastname'
            value={personName.lastname}
            onChange={handleChange}
          />
          <input type='submit' />
        </div>
      </form>
      <div className='names_container'>{names}</div>
    </>
  );
};

export default InputNames;
