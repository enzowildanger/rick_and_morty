import React, { useState } from "react";
import validate from "./validation";
import style from "./Form.module.css";

export default function Form(props) {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });

    setErrors(validate(userData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.login(userData);
  };

  //   const arrClassError = ["errors.username && style.warning", "style.inputForm"];
  return (
    <div>
      <form className={style.containForm} onSubmit={handleSubmit}>
        <label className={style.labelForm}>Username:</label>
        <input
          //   className={arrClassError.join(" ")}
          className={style.inputForm}
          type="text"
          name="username"
          value={userData.username}
          onChange={handleInputChange}
        />
        <p className={style.danger}>{errors.username}</p>
        <label className={style.labelForm}>Password:</label>
        <input
          //   className={arrClassError.join(" ")}
          className={style.inputForm}
          type="password"
          name="password"
          value={userData.password}
          onChange={handleInputChange}
        />
        <p className={style.danger}>{errors.password}</p>
        <button className={style.buttonForm}>Login</button>
      </form>
    </div>
  );
}
