import React from 'react';
import { ShortInfoSection, ShortInfoContent, HorizontalLine } from './shortInfoStyledElements';

const ShortInfo = () => {
  return (
    <ShortInfoSection>
      <ShortInfoContent>
        <h3>Dark, Cold, And Windy</h3>
        <HorizontalLine />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia, excepturi facilis. Commodi incidunt exercitationem veniam iste sapiente inventore nobis nesciunt magni eveniet, quia dolor iusto! Neque totam culpa necessitatibus assumenda voluptatum. Architecto perferendis eius ullam exercitationem fuga labore quibusdam, repellendus in incidunt voluptates ipsa dignissimos.
        </p>
        <button>Read More</button>
      </ShortInfoContent>
    </ShortInfoSection>
  )
}

export default ShortInfo;