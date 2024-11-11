import React, {useState, useEffect} from 'react';
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
    
            // Update power consumption based on whether the appliance is on or off
            if (updatedAppliance.is_on) {
                updatePowerConsumption(appliance.power_usage, 'increment');
            } else {
                updatePowerConsumption(appliance.power_usage, 'decrement');
            }
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
                        onMouseEnter={() => setHoveredAppliance(appliance)}
                        onMouseLeave={() => setHoveredAppliance(null)}
                    >
                        <img src={myImage} style={{ maxWidth: '100%' }} alt={appliance.name} />

                        {/* Hover Information */}
                        {hoveredAppliance && hoveredAppliance.id === appliance.id && (
                            <div
                                style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: 'rgba(0, 0, 0, 0.6)',
                                    color: 'white',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    flexDirection: 'column',
                                    padding: '5px', // Padding inside the hover info box
                                }}
                            >
                                <p style={{ margin: '5px' }}>{appliance.name}</p>
                                <p style={{ margin: '5px' }}>{appliance.is_on ? 'On' : 'Off'}</p>
                                <p style={{ margin: '5px' }}>Power Usage: {appliance.power_usage}W</p>
                            </div>
                        )}
                    </div>

                    {/* Buttons Inline with Image */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '5px' }}>
                    <Button onClick={() => toggleAppliance(appliance)}>
                            {appliance.is_on ? 'Turn Off' : 'Turn On'}
                    </Button>
                    </div>
                </Col>
            ))}
        </div>
    );
};


export default NewApplianceButton;
