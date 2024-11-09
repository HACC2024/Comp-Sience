import React from 'react';
import Col from 'react-bootstrap/Col'
import myImage from '../images/lightbulb.png';
import '../styles/appliance.css';

const Appliance = () => {
    return (
        <Col>
            <div style={{width: 200, height: 200, backgroundColor: 'green', borderRadius: '15px'}} className='appliance'>
                <img src={myImage} style={{maxWidth: '100%'}} alt="hi">
                </img>
            </div>
        </Col>
    );
}

export default Appliance;