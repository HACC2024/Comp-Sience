import React from 'react';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col';
import '../styles/PowerConsumption.css'
//import BarChart from '../components/BarChart';
//import ApplianceButton from '../components/ApplianceButton';
import NewApplianceButton from '../components/NewApplianceButton';
import axios from 'axios'


const BASE_URL = "https://hacc-comp-sience-backend.vercel.app/api/appliances/energy-usage/"

export const fetchData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        return response.data
    } catch (error) {
        console.log("Can't fetch Data", error)
        throw error;
    }
};

const PowerConsumption = () => {
    
    const [totalPowerConsumption, setTotalPowerConsumption] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getPower = async () => {
            setLoading(true);
            try {
                const result = await fetchData();
                setTotalPowerConsumption(result.total_power_usage.total_power_usage);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getPower();
    }, []);

    // Function to update the total power consumption
    const updatePowerConsumption = async () => {
        setLoading(true);
        try {
            const result = await fetchData(); // Fetch the updated power consumption from the backend
            setTotalPowerConsumption(result.total_power_usage.total_power_usage); // Update the state with the backend value
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };


    return (
        <Container id="PowerConsumption" className="mt-4">
            <Row class="align-items-center">
                <Col class="align-items-center">
                    <p class="text-center">Total Power Consumption</p>
                    <strong>Total Power Consumption: {totalPowerConsumption} Watts</strong>
                </Col>
                <Col>
                    <NewApplianceButton updatePowerConsumption={updatePowerConsumption}/>
                </Col>
            </Row>
        </Container>
    );
};

export default PowerConsumption;
