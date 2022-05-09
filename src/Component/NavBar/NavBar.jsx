import React from 'react'
import { Navbar, Nav,  Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../Context/cartContext';


function NavBar() {

const {total} = useCartContext()

  return (   
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <img src="https://i.ibb.co/kyMjR4Y/logo.jpg" alt="" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to='/inicio' className="text-decoration-none p-2">Inicio</NavLink>
              <NavLink to='categoria/celular' className="text-decoration-none p-2">Celulares</NavLink>
              <NavLink to='categoria/cargador' className="text-decoration-none p-2">Cargadores</NavLink>
              <NavLink to='categoria/auriculares' className="text-decoration-none p-2">Auriculares</NavLink>
            </Nav>
          </Navbar.Collapse>  
        </Container>
      </Navbar>
      <NavLink to='/carrito' className=" d-flex justify-content-end sticky-top bg-light text-decoration-none">Carrito$ {total} </NavLink>
    </>
  )
}

export default NavBar