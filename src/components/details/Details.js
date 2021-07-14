import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <h3>Details Page</h3>
    </Container>
  );
}

export default withRouter(Details);

const Container = styled.div`
  overflow: hidden;
`;
