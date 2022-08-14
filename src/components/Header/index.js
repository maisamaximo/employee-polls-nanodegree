import './style.css';
import '../../styles.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
    return (
        <>
        <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Employee Poll</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="new">New Poll</Nav.Link>
            <Nav.Link href="leaderboard">Leaderboard</Nav.Link>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        </>
    );
}

export default Header;
