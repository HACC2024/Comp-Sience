import React from 'react';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col';
import '../styles/PowerConsumption.css'
import BarChart from '../components/BarChart';
import ApplianceButton from '../components/ApplianceButton';
import NewApplianceButton from '../components/NewApplianceButton';


const PowerConsumption = () => {
    
    const [totalPowerConsumption, setTotalPowerConsumption] = useState(0);

    // Function to update the total power consumption
    const updatePowerConsumption = (powerUsage, action) => {
        setTotalPowerConsumption((prev) => {
            if (action === 'increment') {
                return prev + powerUsage;
            } else if (action === 'decrement') {
                return prev - powerUsage;
            }
            return prev;
        });
    };


    return (
        <Container id="PowerConsumption" className="mt-4">
            <Row class="align-items-center">
                <Col>
                    <p class="text-center">Total Power Consumption</p>
                    <strong>Total Power Consumption: </strong>
                    {totalPowerConsumption}
                    <BarChart />
                </Col>
                <Col>
                    <NewApplianceButton updatePowerConsumption={updatePowerConsumption}/>
                </Col>
            </Row>
        </Container>
    );
};

export default PowerConsumption;
