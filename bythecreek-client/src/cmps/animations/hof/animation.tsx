import { useSpring } from 'react-spring';

export const animation = (animationStyles: { from: object, to: object, config?: object }) => useSpring(animationStyles);

