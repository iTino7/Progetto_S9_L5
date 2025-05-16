import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";
import { Grid, Grid3x3 } from "react-bootstrap-icons";

function MyTvShows(props) {
  return (
    <Container fluid className="px-4 d-flex align-items-center">
      <Row>
        <Col xs={12} className="d-flex ">
          <h2 className="text-white">{props.title}</h2>
          <Dropdown className="ms-3">
            <Dropdown.Toggle
              variant="dark"
              className="border-white"
              id="dropdown-basic"
            >
              Genres
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Thriller</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>

      <div className="ms-auto d-flex justify-content-md-end justify-content-start text-white">
        <Grid className={props.iconClass} />
        <Grid3x3 className={props.iconClass} />
      </div>
    </Container>
  );
}

export default MyTvShows;
