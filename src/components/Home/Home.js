
import { Button } from 'bootstrap';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Home.css';
const Home = () => {
    return (
        <div className='hero-area'>
            <Container>
                <Row className='align-items-center'>
                    <Col ms='6'>
                        <h2 className='hero-text'>Kawasaki Ninja H2R</h2>
                        <p>The development of the Ninja H2®R motorcycle goes beyond the boundaries of any other Kawasaki motorcycle. Born through the unprecedented collaboration between multiple divisions within the Kawasaki Heavy Industries, Ltd.</p>
                        <button>Pre Order Now</button>
                    </Col>
                    <Col ms='6'>
                        <img className='img-fluid' src='./images/kawasaki-h2r.png' alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Home;