import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  let i = 0;
  return (
    <div className={style.divCards}>
      {characters.length === 0 ? (
        <p className={style.pCards}>Look for a character...</p>
      ) : (
        characters.map((element) => (
          <Card
            id={element.id}
            name={element.name}
            species={element.species}
            gender={element.gender}
            image={element.image}
            onClose={() => props.onClose(element.id)}
            key={i++}
          />
        ))
      )}
    </div>
  );
}
