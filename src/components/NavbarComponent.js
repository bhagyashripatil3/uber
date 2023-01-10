import React from 'react'
import { Navbar, Container } from 'react-bootstrap'
export default function NavbarComponent() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    Uber
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
