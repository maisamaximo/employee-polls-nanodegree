import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleLogout } from "../../actions/authedUser";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "./style.css";

const Header = ({ dispatch, authedUserId, authedUser }) => {
  const logout = (e) => {
    e.preventDefault();
    dispatch(handleLogout());
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" className="px-5">
        <Navbar.Brand as={Link} to="/">
          Employee Poll
        </Navbar.Brand>
        <Navbar.Toggle />

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">
            Home
          </Nav.Link>
          <Nav.Link as={Link} to="leaderboard">
            Leaderboard
          </Nav.Link>
          <Nav.Link as={Link} to="add">
            New Poll
          </Nav.Link>
        </Nav>

        <Navbar.Collapse className="justify-content-end">
          <Image
            className="avatar"
            roundedCircle
            src={authedUser?.avatarURL}
            alt=""
          />
          <Navbar.Text>
            Signed in as: <span className="username">{authedUserId}</span>
          </Navbar.Text>
          <Button variant="outline-secondary" className="mx-4" onClick={logout}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  authedUserId: authedUser.id,
  authedUser,
});

export default connect(mapStateToProps)(Header);