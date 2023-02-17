import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import style from "./Detail.module.css";

export default function Detail() {
  const { detailId } = useParams();

  const [character, setCharacter] = useState({
    name: "",
    status: "",
    specie: "",
    gender: "",
    origin: "",
    image: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter({
            name: char.name,
            status: char.status,
            specie: char.specie,
            gender: char.gender,
            origin: char.origin.name,
            image: char.image,
          });
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  return (
    <div>
      <div className={style.divPrincipalDetail}>
        <div className={style.divInfoDetail}>
          {character.name && (
            <p>
              <b>Name: </b>
              {character.name}
            </p>
          )}
          {character.status && (
            <p>
              <b>Status: </b>
              {character.status}
            </p>
          )}
          {character.specie && (
            <p>
              <b>Specie: </b>
              {character.specie}
            </p>
          )}
          {character.gender && (
            <p>
              <b>Gender: </b>
              {character.gender}
            </p>
          )}
          {character.origin && (
            <p>
              <b>Origin: </b>
              {character.origin}
            </p>
          )}
        </div>
        <div>
          {character.image && (
            <img
              className={style.imageDetail}
              src={character.image}
              alt="rym"
            />
          )}
        </div>
      </div>
      <button className={style.buttonDetail} onClick={() => navigate("/home")}>
        Back to Home
      </button>
    </div>
  );
}
