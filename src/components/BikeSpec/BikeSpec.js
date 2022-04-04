import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';

const BikeSpec = () => {
    const img ='https://raw.githubusercontent.com/SamiulxHasanx07/pro-moto-fake-data/main/kawasaki-h2r-2.jpg';
    return (
        <div className= 'bike-spec py-5'>
            <Container className='bike-spec py-5'>
                <h2 className="text-center mb-5">Ninja H2R Spec</h2>
                <Row>
                    <Col sm='12' md='6'>
                        <img className='img-fluid p-5' src={img} alt="ninja-spec" />
                    </Col>
                    <Col sm='12' md='6'>
                        <h2 style={{ color: "#47c335" }}>Ninja H2R Spec</h2>
                        <div>
                            <Table className='table-borderless'>
                                <tbody>

                                <tr>
                                    <td>Engine:</td>
                                    <td>4-stroke,16-valve</td>
                                </tr>
                                <tr>
                                    <td>Displacement:</td>
                                    <td>998cc</td>
                                </tr>
                                <tr>
                                    <td>Torque:</td>
                                    <td>121.5 lb-ft @ 12,500 rpm</td>
                                </tr>
                                <tr>
                                    <td>Ignition:</td>
                                    <td>Digital</td>
                                </tr>
                                <tr>
                                    <td>Front Tire:</td>
                                    <td>120/60 ZR17 V01F slick</td>
                                </tr>
                                <tr>
                                    <td>Rear Tire:</td>
                                    <td>190/65 17</td>
                                </tr>
                                <tr>
                                    <td>Rear Brakes:</td>
                                    <td>single 250mm disc, KIBS ABS</td>
                                </tr>
                                <tr>
                                    <td>Frame Type</td>
                                    <td>Trellis, high-tensile steel</td>
                                </tr>
                                <tr>
                                    <td>Length</td>
                                    <td>81.5 in</td>
                                </tr>
                                <tr>
                                    <td>Width</td>
                                    <td>33.5 in</td>
                                </tr>
                                <tr>
                                    <td>Height</td>
                                    <td>45.7 in</td>
                                </tr>
                                <tr>
                                    <td>Curb Weight</td>
                                    <td>476.3 lb*</td>
                                </tr>
                                <tr>
                                    <td>Fuel Capacity</td>
                                    <td>4.5 gal</td>
                                </tr>
                                </tbody>
                            </Table>
                        </div>
                    </Col>
                </Row>
            </Container>
    </div>
    );
};

export default BikeSpec;