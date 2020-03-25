import React from 'react';
import Slider from './Slider';
import ContentWrapper from '../../../commonStyles/ContentWrapper';

const Home = (): JSX.Element => {
  const images = [
    'https://images.unsplash.com/photo-1485452499676-62ab02c20e83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    'https://images.unsplash.com/photo-1508249158087-3043aa7893f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1489&q=80',
    'https://images.unsplash.com/photo-1541747494531-f1eb66417afb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80',
    'https://images.unsplash.com/photo-1519445606020-a72dd31240a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
  ]

  return (
    <ContentWrapper>
      <Slider slides={images}></Slider>
    </ContentWrapper>
  );
};

export default Home;
