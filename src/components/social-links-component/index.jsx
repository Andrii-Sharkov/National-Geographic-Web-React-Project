import React from 'react';
import { SocialLinksSection, SocialLinksContainer, SocialLinksContent, SocialLinksLogo, SocialLinksIcons, FooterParagraph } from './socialLinksStyledElements';
import logo from '../../images/national-geographic-logo.png';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube} from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';

const SocialLinks = () => {
  return (
    <SocialLinksSection>
      <SocialLinksContainer>
        <SocialLinksContent>
          <SocialLinksLogo src={logo} alt='logo' />
          <SocialLinksIcons>
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaYoutube />
            <FaGooglePlusG />
          </SocialLinksIcons>
        </SocialLinksContent>
        <FooterParagraph>
          The National Geographic Project 2021 
        </FooterParagraph>
      </SocialLinksContainer>
    </SocialLinksSection>
  )
}

export default SocialLinks;