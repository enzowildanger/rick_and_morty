import { toBePartiallyChecked } from "@testing-library/jest-dom/dist/matchers";
import styled from "styled-components";

const DivCard = styled.div`
  display: inline-block;
  background-color: #00b300;
  border-radius: 10px;
  color: white;
  overflow: hidden;
  margin: 25px 0px 25px 0px;
`;

const Button = styled.button`
  position: relative;
  right: -120px;
  top: 10px;
  background-color: red;
  color: white;
  border: 0px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
`;

const styleSpecie = {
  fontSize: "16px",
  marginRight: "15px",
  marginTop: "10px",
};

const styleGender = {
  fontSize: "16px",
  marginTop: "10px",
};

// const styleName = {
//   position: "relative",
//   bottom: "-300px",
//   backgroundColor: "rgb(0,0,0,0.5)",
//   padding: "5px",
// };

export default function Card(props) {
  return (
    <DivCard>
      <Button onClick={props.onClose}>X</Button>
      <h2>{props.name}</h2>
      <img src={props.image} alt="" />
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h2 style={styleSpecie}>Specie: {props.species}</h2>
        <h2 style={styleGender}>Gender: {props.gender}</h2>
      </div>
    </DivCard>
  );
}
