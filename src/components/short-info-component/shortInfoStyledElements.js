import styled from "styled-components";
import BackgroundImage from '../../images/background-image.jpg';

export const ShortInfoSection = styled.section`
  background: url('${BackgroundImage}') no-repeat center center/cover;
  height: 70vh;
`;

export const ShortInfoContent = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-top: 15px solid #ffce00;
  border-right: 15px solid #ffce00;
  border-left: 15px solid #ffce00;
  background-color: black;
  padding: 20px 15px;
  color: white;
  transform: translate(1100px, -80px);

  @media (max-width: 1600px) {
    transform: translate(950px, -80px);
  }

  @media (max-width: 1450px) {
    transform: translate(850px, -80px);
  }

  @media (max-width: 1280px) {
    transform: translate(760px, -80px);
    width: 400px;
    height: 400px;
  }

  @media (max-width: 1160px) {
    transform: translate(700px, -80px);
  }

  @media (max-width: 1024px) {
    transform: translate(600px, -80px);
  }

  @media (max-width: 1000px) {
    transform: translate(550px, -80px);
  }

  @media (max-width: 950px) {
    transform: translate(550px, -80px);
    width: 350px;
    height: 350px;
  }

  @media (max-width: 768px) {
    width: 500px;
    height: 300px;
    transform: translate(150px, 10px);
    opacity: 0.7;
    padding-top: 25px;
  }

  @media (max-width: 540px) {
    transform: translate(20px, 10px);
  }

  @media (max-width: 414px) {
    display: none;
  }

  h3 {
    font-size: 2rem;
    font-family: 'Lato', sans-serif;

    @media (max-width: 1280px) {
      font-size: 1.7rem;
    }

    @media (max-width: 950px) {
      font-size: 1.2rem;
    }

    @media (max-width: 540px) {
      font-size: 1.1rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.4;
    font-family: 'Open Sans', sans-serif;
    font-style: italic;
    margin: 35px 0;

    @media (max-width: 1280px) {
      font-size: 1rem;
      line-height: 1.2;
      margin: 25px 0;
    }

    @media (max-width: 950px) {
      margin: 10px 0;
    }

    @media (max-width: 540px) {
      font-size: 0.95rem;
    }
  }

  button {
    font-size: 1.3rem;
    border: none;
    border-bottom: 1px solid #ffce00;
    background: none;
    color: white;
    padding: 5px 10px;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    @media (max-width: 950px) {
      font-size: 1.1rem;
    }

    @media (max-width: 950px) {
      font-size: 1rem;
    }

    &:hover {
      letter-spacing: 4px;
    }
  }
`;

export const HorizontalLine = styled.div`
  width: 100px;
  height: 2px;
  background-color: #ffce00;
  margin-top: 20px;
`;