import styled from "styled-components";

export const PhotosSection = styled.section`
  height: 150vh;
  background-color: black;

  @media (max-width: 1024px) {
    height: 135vh;
  }

  @media (max-width: 950px) {
    height: 130vh;
  }

  @media (max-width: 768px) {
    height: 115vh;
  }

  @media (max-width: 540px) {
    height: 137vh;
  }

  @media (max-width: 414px) {
    height: 315vh;
  }

  @media (max-width: 375px) {
    height: 288vh;
  }

  @media (max-width: 360px) {
    height: 285vh;
  }
`;

export const PhotosContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 1280px) {
    margin: 0 20px;
  }
`;

export const PhotosContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const PhotosTitle = styled.h3`
  font-size: 2.5rem;
  font-family: 'Lato', sans-serif;
  color: white;
  letter-spacing: 3px;
  margin: 40px 0 25px 0;
  width: 600px;
  text-align: center;

  @media (max-width: 540px) {
    font-size: 2rem;
    width: 500px;
  }

  @media (max-width: 414px) {
    width: 350px;
  }

  @media (max-width: 360px) {
    width: 300px;
  }
`;

export const PhotosSubtitle = styled.p`
  font-size: 1.3rem;
  font-family: 'Lato', sans-serif;
  line-height: 1.4;
  text-align: center;
  color: white;
  width: 700px;
  margin-top: 30px;

  @media (max-width: 540px) {
    font-size: 1.1rem;
    width: 500px;
  }

  @media (max-width: 414px) {
    width: 350px;
  }

  @media (max-width: 360px) {
    width: 300px;
  }
`;

export const PhotosGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  grid-gap: 10px;
  margin-top: 50px;

  @media (max-width: 540px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 414px) {
    grid-template-columns: auto;
  }
`;

export const ImagesWrapper = styled.div`
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    cursor: pointer;
    transition: all 0.5s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Button = styled.button`
  font-size: 1.3rem;
  color: white;
  background-color: black;
  padding: 10px 15px;
  border: 2px solid #ffce00;
  margin: 40px 0;
  transition: all 0.4s;
  cursor: pointer;
  text-transform: uppercase;

  @media (max-width: 540px) {
    font-size: 1.1rem;
  }

  &:hover {
    background-color: #ffce00;
    color: black;
    letter-spacing: 2px;
  }
`;