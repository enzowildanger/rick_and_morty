import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function Nav(props) {
  return (
    <nav>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/1200px-Rick_and_Morty.svg.png"
        alt="rick_and_morty_logo"
        width="20%"
      />
      <Link to="/home" className={style.links}>
        Home
      </Link>
      <Link to="/about" className={style.links}>
        About
      </Link>
      <SearchBar onSearch={props.onSearch} random={props.random} />
    </nav>
  );
}
