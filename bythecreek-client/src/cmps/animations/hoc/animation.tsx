import React from 'react'
import { useSpring, animated } from 'react-spring';

const Animation = ({ styleProps, children }) => {
  const props = useSpring({ ...styleProps });
  
  return <animated.div style={props} children={children} />
}

export default Animation;
