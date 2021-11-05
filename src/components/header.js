import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
    return (
        <>
            <Navbar className="yellotail">
                <LinkContainer to="/">
                    <Navbar.Brand><h1>The daily news</h1></Navbar.Brand>
                </LinkContainer>
            </Navbar>
            <Nav>
                <Nav.Item>
                    <LinkContainer to="/">
                        <Nav.Link> Home</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/services">
                        <Nav.Link> Services</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/clients">
                        <Nav.Link> Clients</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/contact">
                        <Nav.Link> Contact</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/career">
                        <Nav.Link> Career</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
                <Nav.Item>
                    <LinkContainer to="/blogs">
                        <Nav.Link>Blog</Nav.Link>
                    </LinkContainer>
                </Nav.Item>
            </Nav>

        </>
    )
}
export default Header;