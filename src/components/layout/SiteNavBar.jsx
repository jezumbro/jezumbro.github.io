import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

export const SiteNavBar = () => (
  <Navbar bg="dark" variant="dark" className="bg-opacity-25">
    <Container>
      <Nav className="justify-content-l">
        <Navbar.Brand href="/">Zeke Zumbro</Navbar.Brand>
        <Nav.Link href="https://zumbrohomestead.com">Homestead</Nav.Link>
      </Nav>
      <Nav className="justify-content-end">
        <Nav.Link href="https://pdga.com/player/144357">PDGA</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
)
