import React from 'react';
import { ShowCaseSection, ShowCaseContainer, ShowCaseContent, ShowCaseColumnLeft, ShowCaseColumnRight, Square } from './showcaseStyledElements';
import image from '../../images/sunrise.jpg';

const ShowCase = () => {
  return (
    <ShowCaseSection>
      <ShowCaseContainer>
        <ShowCaseContent>
          <Square />
          <ShowCaseColumnLeft>
            <img src={image} alt='sunrise' />
          </ShowCaseColumnLeft>
          <ShowCaseColumnRight>
            <h4>Golden Sunrise</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, asperiores.
            </p>
            <button>View More</button>
          </ShowCaseColumnRight>
        </ShowCaseContent>
      </ShowCaseContainer>
    </ShowCaseSection>
  )
}

export default ShowCase; 