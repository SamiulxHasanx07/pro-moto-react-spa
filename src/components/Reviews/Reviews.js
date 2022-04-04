import { Container, Row } from "react-bootstrap";
import useReviews from "../../hook/useReviews";
import SingleReview from "../SingleReview/SingleReview";
import './Reviews.css';
const Reviews = () => {

    const [reviews, setReviews] = useReviews();
    return (
        <div className="all-reviews py-5">
            <h2 className='text-center mb-5'>Customer Reviews</h2>
            <Container>
                <Row xs={1} md={3} className="g-5 mb-5">
                    {
                        reviews.map(review => <SingleReview key={review._id} review={review}></SingleReview>)
                    }
                </Row>
            </Container>

        </div>
    );
};

export default Reviews;