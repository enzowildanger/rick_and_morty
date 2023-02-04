import { useState } from "react";
import styled from "styled-components";

const styleInput = {
  marginRight: "15px",
  padding: "10px",
  borderRadius: "5px",
};

const styleButton = {
  backgroundColor: "#004d00",
  color: "white",
  border: "0px",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "15px",
  padding: "10px",
  margin: "25px 10px 25px 0px",
};

const styleButtonRandom = {
  backgroundColor: "#ffff00",
  color: "black",
  border: "0px",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "15px",
  padding: "10px",
  margin: "25px 10px 25px 0px",
};

export default function SearchBar(props) {
  const [character, setCharacter] = useState(0);

  const handleSearch = (event) => {
    let { value } = event.target;
    setCharacter(value);
  };

  return (
    <div>
      <input style={styleInput} type="search" onChange={handleSearch} />
      <button style={styleButton} onClick={() => props.onSearch(character)}>
        Add Character
      </button>
      <button style={styleButtonRandom} onClick={props.random}>
        Random Character
      </button>
    </div>
  );
}
