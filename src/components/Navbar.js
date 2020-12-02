import React, { Component, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { Col, Row, Form } from "react-bootstrap";
import * as ReactBootStrap from 'react-bootstrap'
import Container from 'react-bootstrap/Container'
import './Navbar.css'


function Navbar() {
  const [loginShow, setLoginShow] = useState(false);
  const [signupShow, setSignupShow] = useState(false);


  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light" fixed="top">
      <div className="col-9 logo" xs="auto" md="auto">
        <a className="navbar-brand" href="#">House For U <i className="fas fa-home"></i></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      <div className="col-3" xs="auto" md="auto" className="justify-content-end">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <button className="btn btn-light"><a className="nav-link" href="#">Home</a></button>
            </li>
            <li className="nav-item">
              <button className="btn btn-light"><a className="nav-link" href="#">About us</a></button>
            </li>
            <li className="nav-item" onClick={() => setLoginShow(true)}>
              <button className="btn btn-light"><a className="nav-link">Login</a></button>
            </li>

            <li className="nav-item" onClick={() => setSignupShow(true)}>
              <button className="btn btn-lgiht"><a className="nav-link">Sign up</a></button>
            </li>

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
          </ul>
        </div>
      </div>

    </nav >
  );
}

export default Navbar;
