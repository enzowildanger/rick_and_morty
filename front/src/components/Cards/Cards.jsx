import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards(props) {
  const { characters } = props;
  return (
    <div className={style.divCards}>
      {characters.length === 0 ? (
        <p className={style.pCards}>Look for a character...</p>
      ) : (
        characters.map((e) => (
          <Card
            key={e.id}
            id={e.id}
            name={e.name}
            species={e.species}
            gender={e.gender}
            image={e.image}
            onClose={() => props.onClose(e.id)}
          />
        ))
      )}
    </div>
  );
}
