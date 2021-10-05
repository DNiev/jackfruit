import React from 'react';
import { Navbar, Container, Button } from 'react-bootstrap';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    <img
                        alt="logo" 
                        src="https://imgur.com/9MkXjsU.png"
                        width="30"
                        height="30"
                    />
                    <Button href='/Donate'>Donate Now</Button>
                </Navbar.Brand>
            </Container>

        </Navbar>
    )
}

export default Navigation;
