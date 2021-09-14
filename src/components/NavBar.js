import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img src="https://imgur.com/9MkXjsU.png"/>
                </Navbar.Brand>
            </Container>

        </Navbar>
    )
}

export default NavBar;
