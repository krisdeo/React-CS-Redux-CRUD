import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const BackComponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to="/">
          <div className="mt-3">
            <Button color="dark">
              <FontAwesomeIcon icon={faArrowLeft} /> Back
            </Button>
          </div>
        </Link>
      </Col>
    </Row>
  );
};

export default BackComponent;
