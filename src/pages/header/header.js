import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {Link} from 'react-router-dom'


const Header=()=>{
    return (
        <>
        
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Movie</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/" >Home</Link>
              <Link to="/about" className="mx-3">About us</Link>
              <Link to="/contact">Contact us</Link>
              <Link to="/movies" className="mx-3">Movies</Link>
           
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
        </>
    )
}

export default Header;