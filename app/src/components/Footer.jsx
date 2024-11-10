import React from 'react'
import { MDBFooter } from 'mdb-react-ui-kit';


function FooterComponent() {
  return (
    <footer>
    <MDBFooter bgColor='light' className='text-center text-lg-left' style={{bottom: 0, width: '100%'}}>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        Made By:{' Adam Winfield-Smith, Phat Ca, Elijah Saloma, Jared Lo, Victor Pagan, Hunter Von Tungeln'}
      </div>
    </MDBFooter>
    </footer>


  );
}




export default FooterComponent;

