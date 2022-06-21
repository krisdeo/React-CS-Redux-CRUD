import { faCoffee, faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";

const JumbotronComponent = () => {
  return (
    <div className="container-fluid bg-dark text-light p-5">
      <div className="container bg-dark p-5">
        <h1 className="display-4">Welcome to my Website</h1>

        <p>Go to My Website</p>
        <Button href="#" className="btn btn-primary">
            <FontAwesomeIcon icon={faInfo}/>
            {' '}link
        </Button>
      </div>
    </div>
  );
};

export default JumbotronComponent;
