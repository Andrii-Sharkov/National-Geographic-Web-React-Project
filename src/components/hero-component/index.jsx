import React from 'react';
import { HeroSection, HeroContainer, HeroContent, HeroColumnLeft, HeroColumnRight, HeroContentReverse, HeroReverseColumnLeft, HeroReverseColumnRight } from './heroStyledElements';
import Image from '../../images/snow-mountains.jpg';

const Hero = () => {
  return (
    <HeroSection>
      <HeroContainer>
        <HeroContent>
          <HeroColumnLeft>
            <img src={Image} alt='snowy-mountains' />
          </HeroColumnLeft>
          <HeroColumnRight>
            <h1>Spectacular Photos Of Our World</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, corrupti? Esse rem aperiam repudiandae itaque.
            </p>
            <button>Learn More</button>
          </HeroColumnRight>
        </HeroContent>
        <HeroContentReverse>
          <HeroReverseColumnLeft>
            <h2>Winner</h2>
            <p>2021</p>
          </HeroReverseColumnLeft>
          <HeroReverseColumnRight>
            <h2>
              National Geographic Nature Photographer Of The Year
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam doloremque deleniti itaque? Eligendi, laudantium.
            </p>
            <button>Read More</button>
          </HeroReverseColumnRight>
        </HeroContentReverse>
      </HeroContainer>
    </HeroSection>
  )
}

export default Hero;