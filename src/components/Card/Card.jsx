import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import style from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={style.divCard}>
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
