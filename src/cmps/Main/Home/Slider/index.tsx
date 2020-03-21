import React, { useState, useEffect } from 'react';
import SliderStyles from './SliderStyles';
import SliderContent from './SliderContent';
import Slide from './Slide';
import Arrow from './Arrow';

const Slider = ({ slides }): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const [state, setState] = useState({
    activeSlide: 0,
    translate: width,
    transition: 0.45,
  });

  
  const { activeSlide, translate, transition } = state;

  const nextSlide = () => {
    if(activeSlide === slides.length - 1) {
      return setState({
        ...state,
        translate: 0,
        activeSlide: 0
      });
    }

    setState({
      ...state,
      translate: (activeSlide + 1) * width,
      activeSlide: activeSlide + 1,
    });
  };

  const prevSlide = () => {
    if(activeSlide === 0) {
      return setState({
        ...state,
        translate: (slides.length - 1) * width,
        activeSlide: activeSlide === 0 ? slides.length - 1 : activeSlide - 1
      })
    }

    setState({
      ...state,
      activeSlide: activeSlide - 1,
      translate: (activeSlide - 1) * width
    });
  }

  return (
    <SliderStyles>  
      <SliderContent
        translate={translate}
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
