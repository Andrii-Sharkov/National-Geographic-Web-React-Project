import styled from "styled-components";

export const PhotosTwoSection = styled.section`
  height: 50vh;
  background-color: black;

  @media (max-width: 1900px) {
    height: 100vh;
  }

  @media (max-width: 944px) {
    height: 150vh;
  }

  @media (max-width: 540px) {
    height: 276vh;
  }
`;

export const PhotosTwoContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
`;

export const PhotosWrapper = styled.div`
  width: 315px;
  height: 300px;

  img {
    width: 100%;
    height: 100%;
  }

  p {
    color: white;
    font-family: 'Lato', sans-serif;
    font-style: italic;
    line-height: 1.5;
    padding: 20px 15px;
    margin-top: -3px;
    background-color: #333333;
  }
`;
