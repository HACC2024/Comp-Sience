import React, {useState, useEffect} from 'react';
import Col from 'react-bootstrap/Col'
import myImage from '../images/lightbulb.png';
import '../styles/appliance.css';
import { Bar } from 'react-chartjs-2';
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


const Appliance = () => {
    /*
    return (
        <Col>
            <div style={{width: 200, height: 200, backgroundColor: 'green', borderRadius: '15px'}} className='appliance'>
                <img src={myImage} style={{maxWidth: '100%'}} alt="hi">
                </img>
            </div>
        </Col>
    );
}
*/

const [appliances, setAppliances] = useState([])
const [loading, setLoading] = useState(false);
const [hoveredAppliance, setHoveredAppliance] = useState(null);
const [error, setError] = useState(null);

useEffect(() => {
    const getAppliances = async () => {
        setLoading(true)
        try {
            const result = await fetchData();
            setAppliances(result.appliance_list);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false)
        }
    }
        getAppliances();
}, []);

if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {appliances.map((appliance) => (
        <Col key={appliance.id} style={{ position: 'relative' }}>
          <div
            style={{
              width: 200,
              height: 200,
              backgroundColor: appliance.is_on ? 'lightgreen' : 'lightgray',
              borderRadius: '15px',
            }}
            className="appliance"
            onMouseEnter={() => setHoveredAppliance(appliance)}
            onMouseLeave={() => setHoveredAppliance(null)}
          >
            <img src={myImage} style={{ maxWidth: '100%' }} alt={appliance.name} />
            
            {hoveredAppliance && hoveredAppliance.id === appliance.id && (
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <p>{appliance.name}</p>
            <p>{appliance.is_on ? 'On' : 'Off'}</p>
            <p>Power Usage: {appliance.power_usage}W</p>
            </div>
            )}
          </div>
        </Col>
      ))}
    </div>
  );
};

export default Appliance;
