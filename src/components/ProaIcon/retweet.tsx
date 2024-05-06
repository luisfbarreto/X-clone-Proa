import React from 'react';
import icon2 from './logo-nova.svg';


export const retweetIcon : React.FC = (props) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src={icon2} alt="Custom Icon"  style={{ width: '150px', height: '100px' }} {...props} />
    <span style={{ marginLeft: '5px', fontSize: '30px' }}>+</span> 
    </div>
  );
};
