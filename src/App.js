import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Cards from "./components/Cards/Cards.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error.jsx";
import Form from "./components/From/Form.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  function onClose(id) {
    setCharacters(characters.filter((element) => element.id !== id));
  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
          // characters.find((element) => (element.id === data.id) === undefined)
          //   ? setCharacters((characters) => [...characters, data])
          //   : alert("Personaje repetido, prueba otro ID.");
        } else {
          alert("No hay personajes con ese ID.");
        }
      });
  }

  function random() {
    let randomId = Math.floor(Math.random() * 826);
    onSearch(randomId);
  }

  const location = useLocation();
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const username = "ejemplo@gmail.com";
  const password = "password1";

  function login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home");
    }
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function logout() {
    setAccess(false);
  }

  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== "/" && (
        <Nav onSearch={onSearch} random={random} logout={logout} />
      )}

      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          exact
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route
          exact
          path="/favorites"
          element={<Favorites characters={characters} onClose={onClose} />}
        />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/detail/:detailId" element={<Detail />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
