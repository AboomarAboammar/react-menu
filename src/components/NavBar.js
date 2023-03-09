import React, { useState } from 'react'
import { Container, Navbar, Row,Form,Nav } from 'react-bootstrap'

const NavBar = ({filterSearch}) => {
  const [searchVal,setSearchVal]= useState("")
 const onSearch=(e)=>{
  e.preventDefault()
  filterSearch(searchVal)
  setSearchVal("")
 }
  return (
    <Row>
            <Navbar bg="dark" expand="lg"variant='dark'>
      <Container >
        <Navbar.Brand href="#"><div className='brand-color'>مطعم  جديد</div></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="ابحث"
              className="mx-2"
              onChange={(e)=>{
               
                setSearchVal(e.target.value)
              }
              }value={searchVal}
             
            />
            <button onClick={onSearch} className='btn-search'>ابحث</button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
  )
}

export default NavBar