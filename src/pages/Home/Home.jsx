import { useState } from "react";
import Typewriter from "../../components/Typewriter";
import "./Home.css";
import "../../assets/icons/all.css";
import Button from "../../components/Button";

const Home = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <div>
      <div className="App-header">
        <a
          href="https://github.com/edmarpires9"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1>Blue</h1>
        </a>
        <p className="app-montserrat">
          Rede social moderna desenvolvida com React, Firebase, Node.js e
          MongoDB.
          <br />
          Um espaço para conectar pessoas 🙆🏻‍♀️💖, compartilhar ideias 🤔💡.
          Tecnologia ágil, segura e escalável 🤓😎.
        </p>
        <div className="icons">
          <a
            href="https://react.dev/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-box">
              <img
                src="logo.svg"
                className="App-logo"
                alt="logo"
                title="React"
                height="64px"
              />
              <Typewriter text={"React"} speed={50} />
            </div>
          </a>
          <a
            href="https://firebase.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-box">
              <img
                src="icons8-firebase-100.png"
                alt="Firebase"
                title="Firebase"
                height="64px"
              />
              <Typewriter text={"Firebase"} speed={50} />
            </div>
          </a>
          <a
            href="https://nodejs.org/pt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-box">
              <img
                src="icons8-nodejs-100.png"
                alt="NodeJS"
                title="NodeJS"
                height="64px"
              />
              <Typewriter text={"Node.js"} speed={50} />
            </div>
          </a>
          <a
            href="https://www.mongodb.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon-box">
              <img
                src="icons8-mongo-db-100.png"
                alt="MongoDB"
                title="MongoDB"
                height="64px"
              />
              <Typewriter text={"MongoDB"} speed={50} />
            </div>
          </a>
        </div>
        <form>
          <div className="form-group">
            <input
              type="email"
              id="fullname"
              required
              placeholder=""
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="loginData"
            />
            <label htmlFor="fullname">
              <i class="fa-solid fa-envelope"></i> Email
            </label>
          </div>
        </form>
        <form>
          <div className="form-group">
            <input
              type="password"
              id="fullname"
              required
              placeholder=""
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="loginData"
            />
            <label htmlFor="fullname">
              <i class="fa-solid fa-key"></i> Senha
            </label>
          </div>
        </form>
        <div>
          <Button
            name="Criar novo usuário"
            setFunction={setEmail}
            cssConfig={{
              backgroundColor: "#087ea4",
              backgroundColorHover: "#0a96bf",
              color: "white",
              colorHover: "white",
            }}
          />
          <Button
            name="Entrar"
            setFunction={setEmail}
            cssConfig={{
              backgroundColor: "white",
              backgroundColorHover: "#f2f2f2",
              color: "#23272f",
              colorHover: "#23272f",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
