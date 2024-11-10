import React, {useState, useEffect} from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Appliance from './Appliance';
import Row from 'react-bootstrap/Row';
import { Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import myImage from '../images/lightbulb.png';
import axios from 'axios'

const BASE_URL = "https://hacc-comp-sience-backend.vercel.app/api/appliances/energy-usage/"
const fetchData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}`);
            return response.data
        } catch (error) {
            console.log("Can't fetch Data", error)
            throw error;
        }
    };

const MainCarousel = () => {
    const [appliances, setAppliances] = useState([])
    const [loading, setLoading] = useState(false);
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
    console.log(appliances)
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    const chunkArray = (array, chunkSize) => {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    };

    const applianceChunks = chunkArray(appliances, 4);

    return (
        <Carousel style={{ backgroundColor: "grey" }} slide={false}>
            {applianceChunks.map((chunk, index) => (
                <Carousel.Item key={index}>
                    <Container>
                        <Row style={{ justifyContent: 'center', margin: '50px 0px 100px 0px' }}>
                            {[0, 1].map(rowIndex => (
                                <Row key={rowIndex} className="g-3" style={{ justifyContent: 'space-evenly' }}>
                                    {chunk.slice(rowIndex * 2, rowIndex * 2 + 2).map((appliance, i) => (
                                        <Col key={i} style={{ maxWidth: "200px" }}>
                                            <Card style={{ width: "200px", height: "300px", padding: "10px" }}>
                                                <Card.Img 
                                                    variant="top" 
                                                    src={myImage} 
                                                    style={{ height: "150px", objectFit: "cover" }} 
                                                />
                                                <Card.Body>
                                                    <Card.Title style={{ fontSize: "1rem", textAlign: "center", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                                                        {appliance.name}
                                                    </Card.Title>
                                                    <Card.Text style={{ fontSize: "0.9rem", textAlign: "center" }}>
                                                        {appliance.name} is using a total of {appliance.power_usage} energy!!
                                                    </Card.Text>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            ))}
                        </Row>
                    </Container>
                </Carousel.Item>
            ))}
        </Carousel>

    );
}


export default MainCarousel;