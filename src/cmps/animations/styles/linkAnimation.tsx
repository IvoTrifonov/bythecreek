import { config } from "react-spring";

export default {
  from: { transform: 'translate3d(0, 30px, 0)', opacity: 0 },
  to: { transform: 'translate3d(0, 0, 0)', opacity: 1 },
  delay: 600,
  config: config.wobbly,
}