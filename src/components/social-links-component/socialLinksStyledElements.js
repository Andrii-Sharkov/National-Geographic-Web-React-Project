import styled from "styled-components";
import bgImage from '../../images/background-image-2.jpg';

export const SocialLinksSection = styled.section`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9)), url('${bgImage}') no-repeat center center/cover;
  height: 50vh;
  background-attachment: fixed;

  @media (max-width: 414px) {
    height: 55vh;
  }
`;

export const SocialLinksContainer = styled.div`
  max-width: 1300px;
  margin: 0 auto;

  @media (max-width: 1280px) {
    margin: 0 20px;
  }
`;

export const SocialLinksContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px 0;
  border-bottom: 1px solid white;

  @media (max-width: 414px) {
    flex-direction: column;
    row-gap: 15px;
  }
`;

export const SocialLinksLogo = styled.img`
  width: 200px;
  height: 100px;
`;

export const SocialLinksIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  color: #ffce00;
  font-size: 2rem;
`;

export const FooterParagraph = styled.p`
  color: white;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px auto;
  font-size: 1.4rem;
  letter-spacing: 2px;
`;