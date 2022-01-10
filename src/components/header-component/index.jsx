import React from 'react';
import { Heading, HeaderContainer, HeaderLogo, HeaderMenu } from './headerStyledElememts';
import Logo from '../../images/national-geographic-logo.png';

const Header = () => {
  return (
    <Heading>
      <HeaderContainer>
        <HeaderLogo>
          <img src={Logo} alt='logo' />
        </HeaderLogo>
        <HeaderMenu />
      </HeaderContainer>
    </Heading>
  )
}

export default Header;