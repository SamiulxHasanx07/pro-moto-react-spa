import React from 'react';
import { Container } from 'react-bootstrap';

const NotFound = () => {
    const img = 'https://raw.githubusercontent.com/SamiulxHasanx07/pro-moto-fake-data/main/not-found.jpg';
    return (
        <div className='mt-5 py-5' style={{minHeight:'90vh'}}>
            <Container>
                <h2 className='text-center'>Page Not Found</h2>
                <p className='text-center'>Please go back or try other content</p>

                <div className='d-flex justify-content-center'>
                    <img className="w-50" src={img} alt="404 Not Found" />
                </div>
            </Container>
        </div>
    );
};

export default NotFound;