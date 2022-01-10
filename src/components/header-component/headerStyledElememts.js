import styled from "styled-components";
import { AiOutlineMenuFold as menuIcon } from 'react-icons/ai';

export const Heading = styled.header`
  background-color: black;
  height: 10vh;
  border-bottom: 2px solid white;
`;

export const HeaderContainer = styled.div`
  max-width: 1300px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderLogo = styled.a`
  cursor: pointer;

  img {
    width: 180px;
    height: 80px;
  }
`;

export const HeaderMenu = styled(menuIcon)`
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
`;