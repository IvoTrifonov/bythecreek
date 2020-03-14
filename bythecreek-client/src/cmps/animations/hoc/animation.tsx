import React from 'react'

import { Spring } from 'react-spring/renderprops';

const Animation = ({ styleProps, children }) => {
  return <Spring {...styleProps}>
    {props => <div style={props}>{children}</div>}
  </Spring>
}

export default Animation;
