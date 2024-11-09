import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Application from './Application';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const MainCarousel = () => {
    return (
        <Carousel style={{backgroundColor: "grey"}}>
          <Carousel.Item className="mainCarouselSlide">
            <Container style={{margin: 'auto'}}>
              <Row style={{justifyContent: 'space-around', margin: '100px 0px 200px 0px'}}>
                <Application />
                <Application />
                <Application />
                <Application />
              </Row>
              <Row style={{justifyContent: 'space-around', margin: '0px 0px 100px 0px'}}>
                <Application />
                <Application />
                <Application />
                <Application />
              </Row>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container style={{margin: 'auto'}}>
              <Row style={{justifyContent: 'space-around', margin: '100px 0px 200px 0px'}}>
                <Application />
                <Application />
                <Application />
                <Application />
              </Row>
              <Row style={{justifyContent: 'space-around', margin: '0px 0px 100px 0px'}}>
                <Application />
                <Application />
                <Application />
                <Application />
              </Row>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
          <Carousel.Item>
            <Container style={{margin: 'auto'}}>
              <Row style={{justifyContent: 'space-around', margin: '100px 0px 200px 0px'}}>
                <Application />
                <Application />
                <Application />
                <Application />
              </Row>
              <Row style={{justifyContent: 'space-around', margin: '0px 0px 100px 0px'}}>
                <Application />
                <Application />
                <Application />
                <Application />
              </Row>
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Container>
          </Carousel.Item>
        </Carousel>
    );
}


export default MainCarousel;