import { useState } from "react";
import style from "./SearchBar.module.css";

export default function SearchBar(props) {
  const [character, setCharacter] = useState(0);

  const handleSearch = (event) => {
    let { value } = event.target;
    setCharacter(value);
  };

  return (
    <div>
      <input
        className={style.inputSearchBar}
        type="search"
        onChange={handleSearch}
        placeholder="Search your character..."
      />
      <button
        className={style.buttonSearchBar}
        onClick={() => props.onSearch(character)}
      >
        Add Character
      </button>
      <button className={style.buttonRandomSearchBar} onClick={props.random}>
        Random Character
      </button>
    </div>
  );
}
