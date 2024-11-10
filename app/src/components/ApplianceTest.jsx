import React from 'react';
import Col from 'react-bootstrap/Col'
import myImage from '../images/lightbulb.png';
import '../styles/appliance.css';
import Container from 'react-bootstrap/Container';

const ApplianceTest = () => {
    return (
        <Container className="d-flex justify-content-center align-items-center">
            <div style={{width: 75, height: 75, backgroundColor: 'green', borderRadius: '15px'}} className='applianceTest'>
                <img src={myImage} style={{maxWidth: '100%'}} alt="hi">
                </img>
            </div>
        </Container>
    );
}

export default ApplianceTest;