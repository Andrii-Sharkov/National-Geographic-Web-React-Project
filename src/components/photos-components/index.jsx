import React from 'react';
import { HorizontalLine } from '../short-info-component/shortInfoStyledElements';
import { PhotosSection, PhotosContainer, PhotosContent, PhotosTitle, PhotosSubtitle, PhotosGallery, ImagesWrapper, Button } from './photosStyledElements';
import { PhotosData } from './photosData';

const Photos = () => {
  return (
    <PhotosSection>
      <PhotosContainer>
        <PhotosContent>
          <PhotosTitle>Sony World Photography Awards</PhotosTitle>
          <HorizontalLine />  
          <PhotosSubtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla cum adipisci, ex iusto sunt tempore reiciendis laudantium illo officia quia sit eum, praesentium rem impedit.
          </PhotosSubtitle>
        </PhotosContent>
        <PhotosGallery>
          {PhotosData.map((photo, index) => {
            return (
              <ImagesWrapper key={index}>
                <img src={photo.image} alt='images-gallery' />
              </ImagesWrapper>
            )
          })}
        </PhotosGallery>
        <Button>
          View More
        </Button>
      </PhotosContainer>
    </PhotosSection>
  )
}

export default Photos;