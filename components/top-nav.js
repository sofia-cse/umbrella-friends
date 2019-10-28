import React from 'react'
import Link from 'next/link'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


const links = [
  { href: '/page', label: 'Events' },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const TopNav = () => (
  <topnav>

    <Navbar collapseOnSelect expand="md" bg="light" variant="light">
      <Navbar.Brand href="/">Afternoon Umbrella Friends</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">About</Nav.Link>
          <Nav.Link href="/page">Events</Nav.Link>
        </Nav>
        
      </Navbar.Collapse>
    </Navbar>

    <style jsx global>{`
     div {
     }
     h1 {
       text-align: center;
     }
    `}</style>
  </topnav>
)

export default TopNav
