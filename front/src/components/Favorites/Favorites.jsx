import React from "react";
import Card from "../Card/Card";
import { useSelector, useDispatch } from "react-redux";
import { filterFav, orderFav, resetFav } from "../../redux/actions";
import style from "./Favorites.module.css";

export default function Favorites(props) {
  const dispatch = useDispatch();
  const myFavorites = useSelector((s) => s.myFavorites);

  function handleClick(e) {
    e.preventDefault();
    const { name, value } = e.target;
    if (name === "filter") {
      return dispatch(filterFav(value));
    }
    if (name === "order") {
      dispatch(orderFav(value));
    }
  }

  return (
    <>
      <div className={style.divFilter}>
        <select
          name="order"
          defaultValue={"Default"}
          onChange={handleClick}
          className={style.buttonFilter}
        >
          <option value="Default" disabled>
            Filter Order
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select
          name="filter"
          defaultValue={"Default"}
          onChange={handleClick}
          className={style.buttonFilter}
        >
          <option value="Default" disabled>
            Filter Gender
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
        <button
          onClick={() => dispatch(resetFav())}
          className={style.buttonFilter}
        >
          Reset filters
        </button>
      </div>
      <div className={style.divFav}>
        {myFavorites.length === 0 ? (
          <p className={style.pFav}>
            You don't have favorite characters yet...
          </p>
        ) : (
          myFavorites?.map((e) => (
            <Card
              key={e.id}
              id={e.id}
              name={e.name}
              species={e.species}
              gender={e.gender}
              image={e.image}
              // onClose={() => props.onClose(e.id)}
            />
          ))
        )}
      </div>
    </>
  );
}
