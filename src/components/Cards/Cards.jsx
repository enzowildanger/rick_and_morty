import Card from "../Card/Card";
import styled from "styled-components";

const DivCards = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export default function Cards(props) {
  const { characters } = props;
  let i = 0;
  return (
    <DivCards>
      {characters.map((element) => (
        <Card
          name={element.name}
          species={element.species}
          gender={element.gender}
          image={element.image}
          onClose={() => props.onClose(element.id)}
          key={i++}
        />
      ))}
    </DivCards>
  );
}
