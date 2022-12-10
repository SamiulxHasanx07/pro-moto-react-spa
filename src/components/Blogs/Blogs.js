import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Blogs.css';
const Blogs = () => {
    return (
        <div className='blogs'>
        {/*
            <Container className='py-5'>
                <h2 className='mb-4 text-center'>Question Ans:</h2>
                <Card className='border-0 mx-auto'>
                    <Card.Body>
                        <Card.Title>What is Context API?</Card.Title>
                        <Card.Text>
                            প্রতিটি Component এ ম্যানুয়ালি প্রপস আকারে প্রেরন না করে, আলাদা আলাদা ভাবে Component এ ডাটা প্রেরন করার একটি উপায়, Context api এর মাধ্যমে  যে কোন ডাটা গ্লোবাল ভাবে ভেরিয়েবল হিসাবে স্টোর করে রাখা যায় এবং তা  Props Drilling না করে যে কোন Component থেকে access করা যায় । React Application মূলত Top to Down অর্থাৎ টপ কম্পোনেন্ট হতে ডাউন Component এ Data/Props প্রেরন করে থাকে, যার ফলে ডাউন Component হতে চাইলেও কোন ডাটা টপ Component এ প্রেরন করা যায় না, এই সমস্যা সমাধান করে থাকে Context api.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card className='mt-4 border-0 mx-auto'>
                    <Card.Body>
                        <Card.Title>What is Semantic tags?</Card.Title>
                        <Card.Text>
                            HTML Semantic Tags মূলত ওয়েব পেজের আলাদা আলাদা Section বা Layout কে নির্দেশ করে থাকে যার ফলে Search Engine সে সকল Data/Section কে সহযে ক্রল করতে পারে, বা বুঝতে পারে কোন ধরনের Data রয়েছে উক্ত Section এ । HTML Semantic Tags এর মাধ্যমে উক্ত Section সমূহের ডাটার গুরুত্ব প্রকাশ পায়।
                        </Card.Text>
                    </Card.Body>
                </Card>

                <Card className='mt-4 border-0 mx-auto'>
                    <Card.Body>
                        <Card.Title>Difference Between Inline, Block, Inline-block Elements?</Card.Title>
                        <Row>
                            <Col sm='12' md='4'>
                                <Card.Subtitle className="my-2">Block Element</Card.Subtitle>
                                <Card.Text>
                                    Block Level Element উক্ত Element এর আনূভুমিক সম্পূর্ন প্রস্থ কে দখল করে থাকে। উকত Element এর আনূভুমিক সম্পূর্ন প্রস্থতে অন্য কোন Element স্থান দখল করতে পারবে না।
                                </Card.Text>
                                <Card.Text>
                                    Tags: p, ol,ul, dl, All Headings, article, section, div
                                </Card.Text>
                            </Col>
                            <Col sm='12' md='4'>
                                <Card.Subtitle className="my-2">Inline Element</Card.Subtitle>
                                <Card.Text>
                                    Inline Element সমূহ ঠিক যতটুকু যায়গা প্রয়োজন ঠিক ততটুকু জায়গা দখল করবে, এটি আনুভুমিক সম্পূর্ন প্রস্থ বরাবর জায়গা দখল করবে না।
                                </Card.Text>
                                <Card.Text>
                                    Tags: a, strong, em, b, i, q, mark, span
                                </Card.Text>

                            </Col>
                            <Col sm='12' md='4'>
                                <Card.Subtitle className="my-2">Inline-Block Element</Card.Subtitle>
                                <Card.Text>
                                    Inline-block Element সমূহ Inline Element এর ন্যায় কাজ করে তবে Inline-Block Element এ মার্জিন প্যাডিং যুক্ত করা যায় এবং Height & Width যুক্ত করতে দেয়।
                                </Card.Text>
                                <Card.Text>
                                    Tags: button , input , select , textarea 
                                </Card.Text>

                            </Col>
                        </Row>
                        <Card.Text>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
            */}
        </div>
    );
};

export default Blogs;
