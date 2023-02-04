import styled from "styled-components";
import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";

export default function Nav(props) {
  return (
    <nav>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
        alt="rick_and_morty_logo"
        width="20%"
      />
      <SearchBar onSearch={props.onSearch} random={props.random} />
    </nav>
  );
}
