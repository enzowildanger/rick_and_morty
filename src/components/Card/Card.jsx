import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorites, deleteFavorites } from "../../redux/actions";
import style from "./Card.module.css";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((s) => s.myFavorites);

  useEffect(() => {
    myFavorites.forEach((id) => {
      if (id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  function handleFavorite(id) {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFavorites(id));
    } else {
      setIsFav(true);
      dispatch(addFavorites(id));
    }
  }

  return (
    <div className={style.divCard}>
      {isFav ? (
        <button
          className={style.buttonFav}
          onClick={() => handleFavorite(props.id)}
        >
          💛
        </button>
      ) : (
        <button
          className={style.buttonFav}
          onClick={() => handleFavorite(props.id)}
        >
          🤍
        </button>
      )}
      <button className={style.buttonCard} onClick={props.onClose}>
        X
      </button>
      <Link className={style.h2Card} to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
      </Link>
      <img src={props.image} alt="" />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h2 className={style.styleSpecie}>Specie: {props.species}.</h2>
        <h2 className={style.styleGender}>Gender: {props.gender}.</h2>
      </div>
    </div>
  );
}
