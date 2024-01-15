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
      <style>
        {`
          @media screen and (max-width: 600px) {
            .mockupenft {
              position: relative;
              top: 367px;
            }
            #mockupenft{
              height: 450px;
            }
          }
        `}
      </style>

      <img
        className='mockupenft'
        src={ResponsiveDevice}
        alt="Mockup"
        id='mockupenft'
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