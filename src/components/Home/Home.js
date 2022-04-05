import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import './Home.css';
import useReviews from '../../hook/useReviews';
import SingleReview from '../SingleReview/SingleReview';
import { useNavigate } from "react-router-dom";
import BikeSpec from '../BikeSpec/BikeSpec';
const Home = () => {
    // fake data
    const bikeInfo = {
        name: 'Kawasaki Ninja H2R',
        description: 'The development of the Ninja H2®R motorcycle goes beyond the boundaries of any other Kawasaki motorcycle. Born through the unprecedented collaboration between multiple divisions within the Kawasaki Heavy Industries, Ltd.',
        cc: '998cc',
        torque: '165 Nm',
        power: '322 bhp',
        img: 'https://raw.githubusercontent.com/SamiulxHasanx07/pro-moto-fake-data/main/kawasaki-h2r.png',
    }
    const { name, description, cc, torque, power, img } = bikeInfo;

    const [reviews, setReviews] = useReviews();
    const newData = reviews.slice(0, 3);

    const navigate = useNavigate();
    return (
        <>
            <div className='hero-area'>
                <Container>
                    <Row className='align-items-center'>
                        <Col ms='12' md='6'>
                            <h2 className='hero-text'>{name.slice(0, 8)} <span className='second-txt'>{name.slice(8)}</span></h2>
                            <p>{description}</p>
                            <div>
                                <Button variant='' className="pm-btn px-4 py-2 mt-3 me-3">Order Now</Button>
                                <Button variant='' className="pm-btn px-4 py-2 mt-3">Showrooms</Button>
                            </div>
                            <Row className="mt-5 info-text">
                                <Col>
                                    <div className='text-left'>
                                        <h4>{cc}</h4>
                                        <p >Engine CC</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='text-left'>
                                        <h4>{torque}</h4>
                                        <p >Torque</p>
                                    </div>
                                </Col>
                                <Col>
                                    <div className='text-left'>
                                        <h4>{power}</h4>
                                        <p>Power</p>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                        <Col ms='12' md='6'>
                            <img className='img-fluid' src={img} alt="" />
                        </Col>
                    </Row>
                </Container>
            </div>

            {/* Review section */}
            <div className='review-section py-5'>
                <h2 className='text-center mb-5'>Customer Reviews</h2>
                <Container>
                    <Row xs={1} md={2} lg={3} className="g-5 mb-5">
                        {
                            newData.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                        }
                    </Row>
                    <div className='d-flex justify-content-center'>
                        <Button onClick={() => navigate('/reviews')} className="pm-btn border-0 px-4 py-2    ">See All Reviews</Button>
                    </div>
                </Container>
            </div>
            <BikeSpec></BikeSpec>
        </>
    );
};

export default Home;