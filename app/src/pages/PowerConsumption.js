import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col';
import '../styles/PowerConsumption.css'
import BarChart from '../components/BarChart';
import ApplianceButton from '../components/ApplianceButton';


const PowerConsumption = () => {
    return (
        <Container id="PowerConsumption">
            <Row>
                <Col>
                    <p class="text-align-center">Power Consumption</p>
                    <BarChart />
                </Col>
                <Col>
                    <ApplianceButton/>
                </Col>
            </Row>
        </Container>
    );
};

export default PowerConsumption;
