import React from 'react';
import { Slide } from 'react-slideshow-image';
import './styles.scss';

const images = [
  'https://images.unsplash.com/photo-1493787039806-2edcbe808750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1545450660-3378a7f3a364?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1551131618-3f0a5cf594b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80',
  'https://images.unsplash.com/photo-1525721653822-f9975a57cd4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
  'https://images.unsplash.com/photo-1532985686121-69cd16c17471?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1349&q=80',
];

const fadeProperties = {
  duration: 3500,
  transitionDuration: 300,
  infinite: true,
  indicators: true
}

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...fadeProperties}>
        {images.map((image, i) => {
          return (
            <div key={i} className="each-fade">
              <div className="image-container">
                <img src={image} />
              </div>
            </div>
          )
        })}
      </Slide>
    </div>
  )
}

export default Slideshow;