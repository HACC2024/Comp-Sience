import React from 'react';
import { MDBFooter } from 'mdb-react-ui-kit';

function FooterComponent() {
  return (
    <MDBFooter 
      bgColor='dark' 
      className='text-center text-lg-left' 
      style={{ 
        bottom: 0, 
        width: '100%', 
        backgroundColor: 'black', 
        color: 'white', 
        fontFamily: "'Patrick Hand', cursive", 
        fontSize: '1.5rem' // Set the desired font size here
      }}
    >
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)', fontSize: '1.5rem' }}>
        Made By: {' Adam Winfield-Smith, Phat Ca, Elijah Saloma, Jared Lo, Victor Pagan, Hunter Von Tungeln'}
      </div>
    </MDBFooter>
  );
}

export default FooterComponent;