import styled from "styled-components";

export const UnderwaterSection = styled.section`
  background-color: black;
  height: 90vh;

  @media (max-width: 1280px) {
    height: 100vh;
  }

  @media (max-width: 768px) {
    height: 120vh;
  }
`;

export const UnderwaterContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 50px 0;

  @media (max-width: 1280px) {
    margin: 0 20px;
  }
`;

export const UnderwaterContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 100px 0;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    padding: 30px 0;
  }
`; 

export const UnderwaterColumnLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex: 70%;
  color: white;
  padding: 25px 20px;
  border: 2px solid #ffce00;
  background-color: black;
  height: 400px;

  @media (max-width: 950px) {
    height: 300px;
  }

  @media (max-width: 768px) {
    align-items: center;
    height: 250px;
  }

  @media (max-width: 375px) {
    height: 280px;
  }

  h4 {
    font-size: 2rem;
    font-family: 'Lato', sans-serif;
    width: 400px;

    @media (max-width: 1280px) {
      font-size: 1.7rem;
    }

    @media (max-width: 950px) {
      font-size: 1.5rem;    
    }

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }

    @media (max-width: 414px) {
      font-size: 1.4rem;
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.4;
    margin: 25px 0;
    font-family: 'Lato', sans-serif;
    width: 350px;

    @media (max-width: 1280px) {
      width: 300px;
      font-size: 1rem;
      line-height: 1.2;
    }

    @media (max-width: 768px) {
      width: 100%;
      text-align: center;
    }

    @media (max-width: 414px) {
      margin: 10px 0;
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

    &:hover {
      letter-spacing: 4px;
    }
  }
`;

export const UnderwaterColumnRight = styled.div`
  width: 750px;
  height: 400px;
  position: relative;

  @media (max-width: 1155px) {
    width: 650px;
    height: 400px;
  }

  @media (max-width: 1024px) {
    width: 600px;
    height: 400px;
  }

  @media (max-width: 950px) {
    width: 550px;
    height: 300px;
  }

  @media (max-width: 375px) {
    height: 250px;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -5rem;
    right: 12rem;
    z-index: 15;

    @media (max-width: 1155px) {
      top: -5rem;
      right: 10rem;
    }

    @media (max-width: 950px) {
      top: -5rem;
      right: 3rem;
    }

    @media (max-width: 768px) {
      top: 0;
      right: 0;
      margin-top: 20px;
      width: 500px;
      height: 350px;
      width: 100%;
      height: auto;
    }
  }
`;

export const Square = styled.div`
  width: 650px;
  height: 400px;
  background: black;
  border: 5px solid #ffce00;
  position: absolute;
  top: -3rem;
  right: 14rem;

  @media (max-width: 1250px) {
    width: 550px;
  }

  @media (max-width: 1150px) {
    width: 500px;
  }

  @media (max-width: 950px) {
    width: 300px;
    height: 300px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const SubmitFormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 20px;
  
  @media (max-width: 825px) {
    flex-wrap: wrap;
  }

  @media (max-width: 768px) {
    margin-top: 80px;
  }

  @media (max-width: 414px) {
    margin: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;

export const SubmitFormLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 45px;
  border: 2px solid #ffce00;
  color: white;
  font-family: 'Lato', sans-serif;
  height: 150px;
  flex: 25%;

  h5 {
    font-size: 2rem;
    text-align: center;
    color: white;
  }
`;

export const SubmitFormCenter = styled.div`
  flex: 25%;
  padding: 10px 5px;
  color: white;
  font-family: 'Lato', sans-serif;

  p {
    font-size: 1rem;
    letter-spacing: 1.3px;

    @media (max-width: 414px) {
      margin: 10px 0;
    }
  }
`;

export const SubmitFormRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 50%;
  padding: 10px 5px;
  color: white;
  font-family: 'Lato', sans-serif;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 15px;

    @media (max-width: 414px) {
      flex-direction: column;
    }

    input {
      border: none;
      padding: 10px 0 10px 10px;
      font-size: 1.3rem;
      color: black;
      width: 350px;

      @media (max-width: 375px) {
        width: 300px;
      }
    }
  }
`;