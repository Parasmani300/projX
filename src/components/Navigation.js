import React,{useState,useEffect} from 'react'
import '../App.css';
import { Link, useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';


export default function Navigation() {

  const [loggedIn,setLoggedIn] = useState(false);
  const location = useLocation();

  const logOutUser = () => {
    localStorage.removeItem("uid");
        localStorage.removeItem("email");
        localStorage.removeItem("token");
        setLoggedIn(false);
  }

  useEffect(() => {
    const checkLoggedIn = localStorage.getItem("token");
    console.log('checkLoggedIn' + checkLoggedIn);
    if(checkLoggedIn !== ""){
      setLoggedIn(true);
    }else{
      setLoggedIn(false);
    }
  }, [])
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  </>
  )
}
