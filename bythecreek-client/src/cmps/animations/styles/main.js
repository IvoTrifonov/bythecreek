import * as easings from 'd3-ease'

let direction = Math.floor(Math.random() * 2);
// direction is random number --> 0 or 1 (left or right)

const mainStyles = {
  from: {
    transform: `translateX(${direction === 0 ? '-' : ''}100%)`,
  },
  to: {
    transform: 'translateX(0)',
  },
  config: {
    duration: 460,
    easing: easings.easeBackInOut
  }
}

export default mainStyles;