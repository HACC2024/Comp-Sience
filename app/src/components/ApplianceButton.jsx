import React from 'react'
import ApplianceTest from "./ApplianceTest"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/Button'

const ApplianceButton = () => {
    return (
        <Container>
            <Container className="mt-4">
                <Row className="align-items-center">
                    <Col class='d-flex justify-content-center'>
                        <ApplianceTest />
                    </Col>
                    <Col class='d-flex justify-content-center'>
                        <Row>
                            <Col>
                                <Button>
                                    Turn On
                                </Button>
                            </Col>
                            <Col>
                                <Button>
                                    Turn Off
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
}

export default ApplianceButton