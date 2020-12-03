import React, { Component, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavigationBar.css'


function NavigationBar() {
  const [loginShow, setLoginShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" fixed="top">
      <Navbar.Brand className="col-9" href="#">House For U <i className="fas fa-home"></i></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav" className="col-3" xs="auto" md="auto">
        <Nav className="mr-auto">
          <button className="btn btn-light"><Nav.Link className="nav-link" href="#">Home</Nav.Link></button>
          <button className="btn btn-light"><a className="nav-link" href="#">About us</a></button>
          <button className="btn btn-light" onClick={() => setLoginShow(true)} onClick={() => setLoginShow(true)}><a className="nav-link"><span class="glyphicon glyphicon-log-in"></span>Login</a></button>
          <button className="btn btn-lgiht" onClick={() => setSignupShow(true)}><a className="nav-link"><span class="glyphicon glyphicon-user"></span>Sign up</a></button>
        </Nav>
      </Navbar.Collapse>

      <Modal className="nav-item" show={loginShow} onHide={() => setLoginShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label for="email-login">Email</label>
            <input type="text" class="form-control" id="email-login" />
          </div>
          <div className="form-group">
            <label for="password-login">Password</label>
            <input type="password" class="form-control" id="password-login" />
          </div>
        </Modal.Body>
        <Modal.Footer >
          <Col xs={4} md={8}><button type="submit" className="btn btn-success btn-lg text-center">Login</button></Col>
        </Modal.Footer>
      </Modal>

      <Modal className="nav-item" show={signupShow} onHide={() => setSignupShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-group">
            <label for="name-login">Name:</label>
            <input type="text" className="form-control" id="name-login" />
          </div>
          <div className="form-group">
            <label for="id-code-person">Id Code</label>
            <input type="text" className="form-control" id="id-code-person" />
          </div>
          <div className="form-group">
            <label for="address">Address</label>
            <input type="text" className="form-control" id="address" />
          </div>
          <div className="form-group">
            <label for="number-phone">Number Phone</label>
            <input type="text" className="form-control" id="number-phone" />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="Email" />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Col xs={4} md={8}><div><Button className="btn btn-success btn-lg">Sign Up</Button></div></Col>
        </Modal.Footer>
      </Modal>
    </Navbar >
  );
}

export default NavigationBar;
