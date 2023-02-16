import React from "react";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { useSelector } from "react-redux";

export default function Favorites(props) {
  const myFavorites = useSelector((s) => s.myFavorites);
  const characters = props.characters.filter((e) => {
    return myFavorites.includes(e.id);
  });
  let i = 0;
  return (
    <>
      <div className={style.divFav}>
        {characters.length === 0 ? (
          <p className={style.pFav}>
            You don't have favorite characters yet...
          </p>
        ) : (
          characters.map((element) => (
            <Card
              id={element.id}
              name={element.name}
              species={element.species}
              gender={element.gender}
              image={element.image}
              // onClose={() => props.onClose(element.id)}
              key={i++}
            />
          ))
        )}
      </div>
    </>
  );
}
