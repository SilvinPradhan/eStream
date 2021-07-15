import React from "react";
import { withRouter } from "react-router";
import styled from "styled-components";

function Details() {
  return (
    <Container>
      <BackgroundImage>
        <img
          src="https://occ-0-92-1722.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABVixGzDct56-tsHGWLZwtml5CejHjH2jjmxSag8NKtgyx7MNfqzhcC5192uzJoo-dpVg0SvdMiLqD37Sx4-MPCRgK0od.jpg?r=2a9"
          alt=""
        />
      </BackgroundImage>
      <ImageTitle>
        <img
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f359881d-6bb2-4391-aba6-779f7084edd4/dafn02k-5c569883-c9b9-4a24-b669-020dce9083d3.png/v1/fill/w_1024,h_1024,strp/justice_league_logo___transparent_by_asthonx1_dafn02k-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAyNCIsInBhdGgiOiJcL2ZcL2YzNTk4ODFkLTZiYjItNDM5MS1hYmE2LTc3OWY3MDg0ZWRkNFwvZGFmbjAyay01YzU2OTg4My1jOWI5LTRhMjQtYjY2OS0wMjBkY2U5MDgzZDMucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.GEy1Cz0trwP1UpDwScW4rGgpvtpbwORYxr1MeIOcCFc"
          alt=""
        />
      </ImageTitle>
      <Controls>
        <PlayButton></PlayButton>
        <TrailerButton></TrailerButton>
        <AddButton></AddButton>
      </Controls>
    </Container>
  );
}

export default withRouter(Details);

const Container = styled.div`
  min-height: calc(100vh-70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const BackgroundImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  opacity: 0.7;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div``;
const PlayButton = styled.div``;
const TrailerButton = styled.div``;
const AddButton = styled.div``;
