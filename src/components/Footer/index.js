import './style.css';
import '../../styles.css';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
    return (
        <div>
            <Navbar bg="dark" fixed="bottom" variant="dark">
                <Container>
                    <Navbar.Brand>Udacity</Navbar.Brand>
                </Container>
            </Navbar>
        </div>
    );
}

export default Footer;