import React from 'react';
import icon2 from './iconeDois.png';


export const retweetIcon : React.FC = (props) => {
  return (
    <img src={icon2} alt="Custom Icon"  style={{ width: '16px', height: '18px', marginRight: '6px' }} {...props} />
  );
};
