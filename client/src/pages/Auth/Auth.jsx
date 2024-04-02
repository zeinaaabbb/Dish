import React, {useState} from 'react';
import axios from 'axios';
import styles from "./Auth.module.css"

import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";


function Auth() {
  return (
    <div className="auth">
      <Login/>
      <Register/>
    </div>
  );
};

const Login = () => {
  const [_, setCookies] = useCookies(["access_token"]);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      const result = await axios.post("http://localhost:3001/auth/login", {
          username,
          password,
        });

        setCookies("access_token", result.data.token);
        window.localStorage.setItem("userID", result.data.userID);
        navigate("/");
    } catch (err) {
      alert("error has been found! ");
      console.error(err)
    }
  };

  return(
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Log in"
      onSubmit={onSubmit}
    />
  );


};

const Register = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [_, setCookies] = useCookies(["access_token"]);
  const navigate = useNavigate();

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:3001/auth/register", {
          username,
          password,
        });
      alert("Registration done!");
    } catch (err) {
      alert("error has been found! ");
      console.error(err)
    }
  };

  return(
    <Form
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword}
      label="Register"
      onSubmit={onSubmit}
    />
  );
};

const Form = ({
  username,
  setUsername,
  password,
  setPassword ,
  label,
  onSubmit,
}) => {
  return(
    <div className={styles.authcontainer}>
      <form onSubmit={onSubmit} className="form-container">
        <div className="auth-content">
        <h2>{label}</h2>
        <div className={styles.formgroup}>
          <label htmlFor="username"> Username: </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div className={styles.formgroup}>
          <label htmlFor="password"> Password: </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit" class={styles.authbtn}>{label}</button>
        </div>
      </form>
  </div>
  )
}

export default Auth
