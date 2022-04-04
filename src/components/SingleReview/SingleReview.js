import React from 'react';
import Rating from 'react-rating';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Col } from 'react-bootstrap';
import './SingleReview.css';
import { faStar } from '@fortawesome/free-solid-svg-icons';
const SingleReview = ({ review }) => {
    const { image, name, rating, user_review, user, _id } = review;
    return (
        <>
            <Col>
                <Card border='0' className="py-2 px-2 text-center">
                    <Card.Body>
                        <div className='mb-3 user_image mx-auto'>
                            <img src={image} alt='' />
                        </div>
                        <Card.Title>{name}</Card.Title>
                        <p>
                            <Rating
                                initialRating={rating}
                                emptySymbol={<FontAwesomeIcon icon={faStar} />}
                                fullSymbol={<FontAwesomeIcon style={{ color: 'goldenrod' }} icon={faStar} />}
                                readonly
                            >
                            </Rating>
                        </p>

                        <Card.Text>
                            <q>
                                {user_review}
                            </q>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
};

export default SingleReview;