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
import BarChart from '../components/BarChart';


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
    const [barAppliances, setBarAppliances] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getPower = async () => {
            setLoading(true);
            try {
                const result = await fetchData();
                setTotalPowerConsumption(result.total_power_usage.total_power_usage);
                const test = result.appliance_list
                const filteredData = test.filter(appliance => appliance.is_on);
                console.log(filteredData)
                setBarAppliances(filteredData);
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
            const test = result.appliance_list
            const filteredData = test.filter(appliance => appliance.is_on);
            console.log(filteredData)
            setBarAppliances(filteredData);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container id="PowerConsumption" className="PowerConsumption mt-4">
            <Row className="align-items-center">
                <Col>
                    <Row className="d-flex justify-content-center">
                        <strong className="PowerUsage text-center">Total Power Use:</strong>
                        <p className="PowerUsage">{totalPowerConsumption} Watts</p>
                        <p className="PowerUsage">{totalPowerConsumption / 1000} Kilowatts</p>
                        <p className="PowerUsage">{totalPowerConsumption / (1000 * 1000)} Megawatts</p>
                    </Row>
                </Col>
                <Col>
                    <NewApplianceButton updatePowerConsumption={updatePowerConsumption} />
                </Col>
            </Row>
            <Row className="mt-4">
                <BarChart appliances={barAppliances}/>
            </Row>
            <Row className="d-flex justify-content-center mt-4">
                <strong className="PowerUsage bold">Energy Time and Cost:</strong>
                <Container className="mt-4">
                </Container>
                <Row className="mt-4">
                    <Col>
                        <Row>
                            <h3>1 Hour</h3>
                        </Row>
                        <Row>
                            <p className='PowerCost'>{(totalPowerConsumption / 1000).toFixed(2)} Kilowatt-Hours</p>
                        </Row>
                        <Row>
                            <p className='PowerCost'>${((totalPowerConsumption / 1000) * (43.22 / 100)).toFixed(2)} per hour</p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h3>2 Hours</h3>
                        </Row>
                        <Row>
                            <p className='PowerCost'>{((totalPowerConsumption / 1000) * 2).toFixed(2)} Kilowatt-Hours</p>
                        </Row>
                        <Row>
                            <p className='PowerCost'>${((totalPowerConsumption / 1000) * 2 * (43.22 / 100)).toFixed(2)} per 2 hours</p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h3>6 Hours</h3>
                        </Row>
                        <Row>
                            <p className='PowerCost'>{((totalPowerConsumption / 1000) * 6).toFixed(2)} Kilowatt-Hours</p>
                        </Row>
                        <Row>
                            <p className='PowerCost'>${((totalPowerConsumption / 1000) * 6 * (43.22 / 100)).toFixed(2)} per 6 hours</p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h3>12 Hours</h3>
                        </Row>
                        <Row>
                            <p className='PowerCost'>{((totalPowerConsumption / 1000) * 12).toFixed(2)} Kilowatt-Hours</p>
                        </Row>
                        <Row>
                            <p className='PowerCost'>${((totalPowerConsumption / 1000) * 12 * (43.22 / 100)).toFixed(2)} per 12 hours</p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h3>1 Day</h3>
                        </Row>
                        <Row>
                            <p className='PowerCost'>{((totalPowerConsumption / 1000) * 24).toFixed(2)} Kilowatt-Hours</p>
                        </Row>
                        <Row>
                            <p className='PowerCost'>${((totalPowerConsumption / 1000) * 24 * (43.22 / 100)).toFixed(2)} per day</p>
                        </Row>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <Row>
                            <h3>1 Week</h3>
                        </Row>
                        <Row>
                            <p className='PowerCost'>{((totalPowerConsumption / 1000) * 24 * 7).toFixed(2)} Kilowatt-Hours</p>
                        </Row>
                        <Row>
                            <p className='PowerCost'>${((totalPowerConsumption / 1000) * 24 * 7 * (43.22 / 100)).toFixed(2)} per week</p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h3>1 Month</h3>
                        </Row>
                        <Row>
                            <p className='PowerCost'>{((totalPowerConsumption / 1000) * 24 * 30).toFixed(2)} Kilowatt-Hours</p>
                        </Row>
                        <Row>
                            <p className='PowerCost'>${((totalPowerConsumption / 1000) * 24 * 30 * (43.22 / 100)).toFixed(2)} per month</p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h3>6 Months</h3>
                        </Row>
                        <Row>
                            <p className='PowerCost'>{((totalPowerConsumption / 1000) * 24 * 30 * 6).toFixed(2)} Kilowatt-Hours</p>
                        </Row>
                        <Row>
                            <p className='PowerCost'>${((totalPowerConsumption / 1000) * 24 * 30 * 6 * (43.22 / 100)).toFixed(2)} per 6 months</p>
                        </Row>
                    </Col>
                    <Col>
                        <Row>
                            <h3>1 Year</h3>
                        </Row>
                        <Row>
                            <p className='PowerCost'>{((totalPowerConsumption / 1000) * 24 * 365).toFixed(2)} Kilowatt-Hours</p>
                        </Row>
                        <Row>
                            <p className='PowerCost'>${(((totalPowerConsumption / 1000) * 24 * 365) * (43.22 / 100)).toFixed(2)} per year</p>
                        </Row>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
};

export default PowerConsumption;
