import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col'
import myImage from '../images/lightbulb.png';
import '../styles/appliance.css';
import Container from 'react-bootstrap/Container';
import axios from 'axios'
import Button from 'react-bootstrap/Button'

const BASE_URL = "https://hacc-comp-sience-backend.vercel.app/api/appliances/energy-usage/"

const POST_URL = "https://hacc-comp-sience-backend.vercel.app/api/appliances/toggle/"

export const fetchData = async () => {
    try {
        const response = await axios.get(`${BASE_URL}`);
        return response.data
    } catch (error) {
        console.log("Can't fetch Data", error)
        throw error;
    }
};

export const postData = async ({ applianceID }) => {
    try {
        console.log(applianceID)
        const response = await axios.post(`${POST_URL}${applianceID}`);
        //console.log(`${POST_URL}${applianceID}`)
        return await fetchData()
    } catch (error) {
        console.log("Can't post Data", error)
        throw error;
    }
};


const NewApplianceButton = ({ updatePowerConsumption }) => {
    const [appliances, setAppliances] = useState([]);
    const [loading, setLoading] = useState(false);
    const [hoveredAppliance, setHoveredAppliance] = useState(null);
    const [error, setError] = useState(null);
    const [currentPower, setCurrentPower] = useState(0);

    useEffect(() => {
        const getAppliances = async () => {
            setLoading(true);
            try {
                const result = await fetchData();
                setAppliances(result.appliance_list);
                setCurrentPower(result.total_power_usage.total_power_usage);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };
        getAppliances();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const toggleAppliance = async (appliance) => {
        const updatedAppliance = { ...appliance, is_on: !appliance.is_on };
        const updatedAppliances = appliances.map((a) =>
            a.id === appliance.id ? updatedAppliance : a
        );
        setAppliances(updatedAppliances);  // Optimistic UI update

        try {
            await postData({ applianceID: appliance.id });  // Wait for the backend response
            updatePowerConsumption();
            // Update power consumption based on whether the appliance is on or off
        } catch (error) {
            console.error("Error toggling appliance", error);
            // Revert UI change if the request fails
            setAppliances(appliances);
        }
    };

    return (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {appliances.map((appliance) => (
                <Col
                    key={appliance.id}
                    style={{
                        display: 'flex',
                        flexDirection: 'row', // Align image and buttons in a row
                        alignItems: 'center', // Center the items vertically
                        gap: '10px', // Space between image and buttons
                        padding: '15px', // Padding around the whole column component
                        backgroundColor: '#f7f7f7', // Optional: Background color to make it stand out
                        borderRadius: '10px', // Optional: Rounded corners
                        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Optional: Add a subtle shadow for better visibility
                    }}
                >
                    {/* Appliance Box */}
                    <div
                        style={{
                            width: 75,
                            height: 75,
                            backgroundColor: appliance.is_on ? 'lightgreen' : 'lightgray',
                            borderRadius: '15px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'relative',
                            padding: '10px', // Padding inside the appliance box
                        }}
                        className="appliance"

                    >
                        <img src={appliance.image_url} style={{ maxWidth: '100%' }} alt={appliance.name} />
                    </div>

                    {/* Buttons Inline with Image */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row', // Place name and button side by side
                            alignItems: 'center', // Center them vertically
                            gap: '10px', // Space between name and button
                            padding: '5px',
                        }}
                    >
                        <p style={{ margin: 0 }}>{appliance.name}</p> {/* Name */}
                        <Button onClick={() => toggleAppliance(appliance)} style={{
                            backgroundColor: appliance.is_on ? 'red' : 'blue', // Red when on, blue when off
                            color: 'white', // Ensure the text is white for readability
                            borderColor: 'transparent', // Optionally remove the border
                        }}>
                            {appliance.is_on ? 'Turn Off' : 'Turn On'}
                        </Button>
                    </div>
                </Col>
            ))}
        </div>
    );
};


export default NewApplianceButton;
