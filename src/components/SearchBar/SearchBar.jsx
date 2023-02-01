import styled from "styled-components";

const styleInput = {
  marginRight: "15px",
  padding: "10px",
  borderRadius: "5px",
};

const styleButton = {
  backgroundColor: "#00b300",
  color: "white",
  border: "0px",
  borderRadius: "5px",
  fontWeight: "bold",
  fontSize: "15px",
  padding: "10px",
  margin: "25px 0px 25px 0px",
};

export default function SearchBar(props) {
  return (
    <div>
      <input style={styleInput} type="search" />
      <button style={styleButton} onClick={props.onSearch}>
        Add
      </button>
    </div>
  );
}
