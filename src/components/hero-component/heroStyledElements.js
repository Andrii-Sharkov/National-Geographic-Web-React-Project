import styled from "styled-components";

export const HeroSection = styled.section`
  height: 120vh;
  background-color: black;

  @media (max-width: 1280px) {
    height: 130vh;
  }

  @media (max-width: 768px) {
    height: 180vh;
  }

  @media (max-width: 540px) {
    height: 160vh;
  }

  @media (max-width: 414px) {
    height: 148vh;
  }
`;

export const HeroContainer = styled.div`
  max-width: 1300px;
  margin: auto;

  @media (max-width: 1280px) {
    margin: 0 20px;
  }
`;

export const HeroContent = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    padding: 50px 0;

    @media (max-width: 768px) {
      grid-template-columns: auto;
      row-gap: 15px;
      padding: 25px 0;
    }
`;

export const HeroColumnLeft = styled.div`
  width: 100%;
  height: 650px;

  @media (max-width: 540px) {
    height: 500px;
  }

  @media (max-width: 414px) {
    height: 400px;
  }

  img {
    width: 100%;
    height: 100%; 
  }
`;

export const HeroColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  border: 5px solid #ffce00;
  padding: 20px 25px;
  height: 650px;
  width: 100%;
  color: white;
  font-family: 'Lato', sans-serif;

  @media (max-width: 768px) {
    height: 300px;
    align-items: center;
  }

  @media (max-width: 360px) {
    padding: 20px 15px;
  }

  h1 {
    font-size: 3.5rem;

    @media (max-width: 768px) {
      font-size: 2.5rem;
      text-align: center;
    }

    @media (max-width: 540px) {
      font-size: 2rem;
      text-align: center;
    }
  }

  p {
    font-size: 1.5rem;
    margin: 40px 0;

    @media (max-width: 768px) {
      font-size: 1.4rem;
      text-align: center;
    }

    @media (max-width: 540px) {
      font-size: 1.3rem;
      text-align: center;
      margin: 25px 0;
    }

    @media (max-width: 375px) {
      font-size: 1.2rem;
      margin: 15px 0;
    }
  }

  button {
    font-size: 1.4rem;
    padding: 5px 10px;
    color: white;
    border: 2px solid white;
    border-radius: 5px;
    background: none;
    letter-spacing: 2px;
    cursor: pointer;
    transition: all 0.4s ease-in-out;

    @media (max-width: 375px) {
      font-size: 1.2rem;
    }

    &:hover {
      background-color: white;
      color: black;
    }
  }
`;

export const HeroContentReverse = styled.div`
  display: grid;
  grid-template-columns: auto 2fr;
  column-gap: 30px;
  justify-content: center;
  align-items: center;
  margin: 40px 0;

  @media (max-width: 768px) {
    grid-template-columns: auto;
    margin: 0;
  }
`;

export const HeroReverseColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  row-gap: 20px;
  padding: 20px 25px;
  border: 5px solid #ffce00;
  color: white;
  font-family: 'Lato', sans-serif;
  width: 300px;
  height: 300px;

  @media (max-width: 768px) {
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: 200px;

    @media (max-width: 360px) {
      height: 180px;
    }
  }

  h2 {
    font-size: 4rem;
    letter-spacing: 2px;

    @media (max-width: 360px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 3rem;
    letter-spacing: 2px;

    @media (max-width: 360px) {
      font-size: 2.5rem;
    }
  }
`;

export const HeroReverseColumnRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  color: white;
  font-family: 'Lato', sans-serif;

  @media (max-width: 768px) {
    margin-top: 30px;
    align-items: center;
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;

    @media (max-width: 414px) {
      font-size: 2rem;
    }
  }

  p {
    font-size: 1.4rem;
    margin: 20px 0;

    @media (max-width: 414px) {
      font-size: 1.2rem;
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

    &:hover {
      letter-spacing: 4px;
    }
  }
`;