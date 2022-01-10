import React from 'react';
import { PhotosTwoSection, PhotosTwoContent, PhotosWrapper } from './photosTwoStyledElements';
import { Data } from './photosTwoData';

const PhotosTwo = () => {
  return (
    <PhotosTwoSection>
      <PhotosTwoContent>
        {Data.map((photo, index) => {
          return (
            <PhotosWrapper key={photo.id}>
              <img src={photo.image} alt='image' />
              <p>{photo.description}</p>
            </PhotosWrapper>          
          )
        })}
      </PhotosTwoContent>
    </PhotosTwoSection>
  )
}

export default PhotosTwo;