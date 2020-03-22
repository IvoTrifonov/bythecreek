import React from 'react'
import ArrowStyles from './ArrowStyles';

const Arrow = ({ direction, handleClick }) => {
  
  return (
    <div onClick={handleClick}>
      <ArrowStyles direction={direction}>
        <span>{direction === 'right' ? '>' : '<'}</span>
      </ArrowStyles>
    </div>
  )
}

export default Arrow;
