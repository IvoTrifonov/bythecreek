import React, { useState, useEffect, useRef } from 'react';
import SliderStyles from './SliderStyles';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';

const Slider = ({ slides }): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      if(Math.abs(window.innerWidth - width) > 45) {
        return setWidth(window.innerWidth);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [width]);

  const [state, setState] = useState({
    activeSlide: 0,
    translate: width,
    transition: 0.45,
  });

  
  const { activeSlide, translate, transition } = state;

  const nextSlide = () => {
    setState({
      ...state,
      translate: activeSlide === slides.length - 1 ? 0 : (activeSlide + 1) * width,
      activeSlide: activeSlide === slides.length - 1 ? 0 : activeSlide + 1,
    });
  };

  const prevSlide = () => {
    setState({
      ...state,
      activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1,
      translate: activeSlide === 0 ? (slides.length - 1) * width : (activeSlide - 1) * width
    });
  }

  return (
    <SliderStyles>  
      <SliderContent
        translate={activeSlide !== 0 ? translate : undefined}
        transition={transition}
        width={width * slides.length}>
        {slides.map((slide, i) => (
          <Slide width={width} key={slide + i} content={slide} />
        ))}
      </SliderContent>

      <Arrow direction="left" handleClick={prevSlide} />
      <Arrow direction="right" handleClick={nextSlide} />
    </SliderStyles>
  );
}

export default Slider;
