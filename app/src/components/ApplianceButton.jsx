import React from 'react'
import Appliance from "./Appliance"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button'

const ApplianceButton = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Appliance />
                </Col>
                <Col>
                    <Button/>
                </Col>
            </Row>
        </Container>
    );
}

export default ApplianceButton