import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, deleteFav } from "../../redux/actions";
import style from "./Card.module.css";

export default function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const myFavorites = useSelector((s) => s.myFavorites);

  function handleFavorite(ch) {
    if (isFav) {
      setIsFav(false);
      dispatch(deleteFav(ch.id));
    } else {
      setIsFav(true);
      dispatch(addFav(ch));
    }
  }
  useEffect(() => {
    myFavorites.forEach((ch) => {
      if (ch.id === props.id) {
        setIsFav(true);
      }
    });
  }, [myFavorites]);

  return (
    <div className={style.divCard}>
      {isFav ? (
        <button
          className={style.buttonFav}
          onClick={() => handleFavorite(props)}
        >
          💛
        </button>
      ) : (
        <button
          className={style.buttonFav}
          onClick={() => handleFavorite(props)}
        >
          🤍
        </button>
      )}
      <button className={style.buttonCard} onClick={props.onClose}>
        X
      </button>
      <Link className={style.h2Card} to={`/detail/${props.id}`}>
        <h2>
          {props.name} ({props.id})
        </h2>
      </Link>
      <img src={props.image} alt="" />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h2 className={style.styleSpecie}>Specie: {props.species}.</h2>
        <h2 className={style.styleGender}>Gender: {props.gender}.</h2>
      </div>
    </div>
  );
}
