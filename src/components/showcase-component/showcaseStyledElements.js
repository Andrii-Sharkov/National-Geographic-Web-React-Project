import styled from "styled-components";

export const ShowCaseSection = styled.section`
  background-color: black;
  height: 75vh;

  @media (max-width: 1024px) {
    height: 60vh;
  }

  @media (max-width: 950px) {
    height: 50vh;
  }

  @media (max-width: 768px) {
    height: 40vh;
  }

  @media (max-width: 540px) {
    height: 65vh;
  }

  @media (max-width: 414px) {
    height: 56vh;
  }
`;

export const ShowCaseContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    margin: 0 20px;
  }
`;

export const ShowCaseContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding: 30px 0;
  position: relative;
`;

export const Square = styled.div`
  width: 600px;
  height: 600px;
  background: transparent;
  border: 5px solid #ffce00;
  position: absolute;
  top: -15px;
  right: 47%;
  opacity: 0.7;

  @media (max-width: 1135px) {
    width: 500px;
    height: 500px;
  }

  @media (max-width: 950px) {
    width: 450px;
    height: 450px;
    top: -1.5rem;
    right: 47%;
  }

  @media (max-width: 768px) {
    width: 350px;
    height: 320px;
    top: 1rem;
    right: 47%;
  }

  @media (max-width: 540px) {
    display: none;
  }
`;

export const ShowCaseColumnLeft = styled.div`
  flex: 60%;

  @media (max-width: 540px) {
    flex: 100%;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ShowCaseColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 40%;
  padding: 50px 60px;
  border: 1px solid #ffce00;
  background: transparent;
  height: 400px;
  color: white;
  transform: translateX(-30px);

  @media (max-width: 1024px) {
    height: 350px;
  }

  @media (max-width: 950px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    height: 250px;
  }

  @media (max-width: 540px) {
    font-size: 2rem;
    margin: 25px;
    height: 170px;
    align-items: center;
    transform: translateX(0px);
  }

  @media (max-width: 375px) {
    height: 200px;
  }

  @media (max-width: 360px) {
    padding: 25px 25px;
  }

  h4 {
    font-size: 2rem;
    font-family: "Lato", sans-serif;

    @media (max-width: 768px) {
      font-size: 1.4rem;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.4;
    margin: 25px 0;
    font-family: "Lato", sans-serif;

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    @media (max-width: 540px) {
      margin: 10px 0;
      text-align: center;
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

    @media (max-width: 768px) {
      font-size: 1rem;
    }

    &:hover {
      letter-spacing: 4px;
    }
  }
`;
