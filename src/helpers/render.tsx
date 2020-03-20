import React from 'react';

export default function render(Cmp: React.ElementType, otherProps?) {
  
  return function (props) {
    return <Cmp {...props} {...otherProps} />
  };
}
