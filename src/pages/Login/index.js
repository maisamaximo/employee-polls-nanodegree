import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { useState } from "react";
import { handleLogin } from "../../actions/authedUser";

import loginImg from "../../assets/images/login-img.png";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import "./style.css";

const Login = ({ dispatch, loggedIn }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (loggedIn) {
    const urlParams = new URLSearchParams(window.location.search);
    const redirectUrl = urlParams.get("redirectTo");
    return <Navigate to={redirectUrl ? redirectUrl : "/"} />;
  }

  const handleUsername = (e) => {
    const value = e.target.value;
    setUsername(value);
  };

  const handlePassword = (e) => {
    const value = e.target.value;
    setPassword(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleLogin(username, password));
    // console.log('', username, password);
    setUsername("");
    setPassword("");
  };

  return (
    <>
      <div className="grid-container-element">
        <div className="grid-child-element">
          <img className="img-logo" src={loginImg} alt={"logo"} />
        </div>

        <div className="grid-child-element login-card">
          <h1
            className="text-3xl font-bold mt-9"
            data-testid="login-heading text-center"
          >
            Login
          </h1>

          <form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                value={username}
                name="username"
                onChange={handleUsername}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                name="password"
                onChange={handlePassword}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: !!authedUser,
});

export default connect(mapStateToProps)(Login);