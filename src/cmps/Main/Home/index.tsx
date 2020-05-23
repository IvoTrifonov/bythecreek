import React from 'react';
import Slideshow from './Slideshow';
import AboutSite from './AboutSite';
import ForumBanner from './ForumBanner';

const Home = (): JSX.Element => {

  return (
    <div>
      <ForumBanner />
      <AboutSite />
      <Slideshow />
    </div>

  );
};

export default Home;
