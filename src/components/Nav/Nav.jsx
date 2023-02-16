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
      <div>
        <Link to="/home">
          <button className={style.links}>Home</button>
        </Link>
        <Link to="/favorites">
          <button className={style.links}>Favorites</button>
        </Link>
        <Link to="/portfolio">
          <button className={style.links}>Portfolio</button>
        </Link>
        <Link to="/about">
          <button className={style.links}>About</button>
        </Link>
        <button className={style.links} onClick={props.logout}>
          Log Out
        </button>
      </div>
      <SearchBar onSearch={props.onSearch} random={props.random} />
    </nav>
  );
}
