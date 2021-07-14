import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h3>Recommended For You</h3>
      <Content>
        <Wrap>
          <img
            src="https://ebahrenburg.files.wordpress.com/2016/05/the_avengers_poster-banner.jpg"
            alt="The Avengers"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://ebahrenburg.files.wordpress.com/2016/05/the_avengers_poster-banner.jpg"
            alt="The Avengers"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://ebahrenburg.files.wordpress.com/2016/05/the_avengers_poster-banner.jpg"
            alt="The Avengers"
          />
        </Wrap>
        <Wrap>
          <img
            src="https://ebahrenburg.files.wordpress.com/2016/05/the_avengers_poster-banner.jpg"
            alt="The Avengers"
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  overflow: hidden;
`;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  img {
    height: 100%auto;
    width: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
  }
`;
