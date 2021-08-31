import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
  render () {
    return (
      <div className='Navbar'>
        <Navbar bg='dark' variant='dark'>
          <Navbar.Brand>Curation Application</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to='/'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/stocks'>
              Stocks
            </Nav.Link>
            <Nav.Link as={Link} to='/login'>
              Login
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>
          </Nav>
        </Navbar>
        {this.props.children}
      </div>
    )
  }
}

export default NavBar