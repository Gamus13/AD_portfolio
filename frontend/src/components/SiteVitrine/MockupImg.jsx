import React from 'react';
import ResponsiveDevice from './images/ResponsiveDevice.png';
import '../../Styles/MockupImage.css';
function MockupImage() {
  return (
    <div 
      className='mockuparent'
      style={{
        position: 'absolute',
        top: '243%',
        left: '50%',
        transform: 'translate(-50%, 50%)',
        
      }}
    >
      <img
        className='mockupenft'
        src={ResponsiveDevice}
        alt="Mockup"
        style={{
          maxWidth: '100%',
          maxHeight: '100%',
          width: 'auto',
          height: 'auto',
        }}
      />
    </div>
  );
}

export default MockupImage;