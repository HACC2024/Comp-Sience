import React from 'react';
import Col from 'react-bootstrap/Col'
import myImage from '../images/lightbulb.png';

const Application = () => {
    return (
        <Col>
            <div style={{width: 200, height: 200, backgroundColor: 'green', borderRadius: '15px'}}>
                <img src={myImage} style={{maxWidth: '100%'}}>
                </img>
            </div>
        </Col>
    );
}

export default Application;