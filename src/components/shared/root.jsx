import React from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./navigation";
import { Container } from "react-bootstrap";

const Root = (props) => {
  return (
    <>
      <Navigation />

      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default Root;
