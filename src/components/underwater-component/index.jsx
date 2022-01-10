import React from 'react';
import { UnderwaterSection, UnderwaterContainer, UnderwaterContent, UnderwaterColumnLeft, UnderwaterColumnRight, Square, SubmitFormRow, SubmitFormLeft, SubmitFormCenter ,SubmitFormRight } from './underwaterStyledElememnts';
import image from '../../images/underwater-2.jpg';
import { Button } from '../photos-components/photosStyledElements';

const Underwater = () => {
  return (
    <UnderwaterSection>
      <UnderwaterContainer>
        <UnderwaterContent>
          <UnderwaterColumnLeft>
            <h4>25 Amazing Photos Of Life Underwater</h4>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem voluptatum repellendus, eaque eius a optio incidunt repudiandae tempore consequuntur veniam possimus magnam eveniet placeat, natus ratione veritatis vero ex animi?
            </p>
            <button>View More</button>
          </UnderwaterColumnLeft>
          <UnderwaterColumnRight>
            <img src={image} alt='underwater' />
            <Square />
          </UnderwaterColumnRight>
        </UnderwaterContent>
        <SubmitFormRow>
          <SubmitFormLeft>
            <h5>Travel With Us</h5>
          </SubmitFormLeft>
          <SubmitFormCenter>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non repellendus reiciendis eos laboriosam at voluptate voluptatem libero voluptates, saepe perspiciatis.
            </p>
          </SubmitFormCenter>
          <SubmitFormRight>
            <form>
              <input type="text" placeholder='Enter a valid email address' />
              <Button>Submit</Button>
            </form>
          </SubmitFormRight>
        </SubmitFormRow>
      </UnderwaterContainer>
    </UnderwaterSection>
  )
}

export default Underwater;