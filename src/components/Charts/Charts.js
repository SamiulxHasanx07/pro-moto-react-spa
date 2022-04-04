import React from "react";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

const Charts = () => {
    const [chartData, setChartData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setChartData(data))
    }, [])
    return (
        <>
            <Container className='py-5'>

                <h2>Dashoard</h2>

                <div className='dashboard py-5'>

                    <Row>
                        <Col md='6'>
                            <h4>Monthly Sales</h4>
                            <ResponsiveContainer width='90%' height={250}>
                                <AreaChart width='100%' data={chartData}
                                    margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorSell" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#fd0daf" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#fd0daf" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <XAxis dataKey="month">
                                    </XAxis>
                                    <YAxis />
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <Tooltip />
                                    <Legend verticalAlign="bottom" height={36} />
                                    <Area type="monotone" dataKey="sell" stroke="#fd0daf" fillOpacity={1} fill="url(#colorSell)" />
                                </AreaChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col sm='12' md='6'>
                            <h4>Monthly Revenue</h4>
                            <ResponsiveContainer width='90%' height={300}>
                                <PieChart>
                                    <Pie data={chartData} dataKey="sell" nameKey="" cx="50%" cy="50%" outerRadius={50} fill="#ff671c" />
                                    <Pie data={chartData} dataKey="revenue" nameKey="" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#6610f2" label />
                                </PieChart>
                            </ResponsiveContainer>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm='12' md='6'>
                            <h4>Chart</h4>
                            <ResponsiveContainer width="100%" height={350}>
                                <LineChart
                                    width={500}
                                    height={300}
                                    data={chartData}
                                    margin={{
                                        top: 20,
                                        right: 30,
                                        left: 20,
                                        bottom: 10,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Legend />
                                    <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                                    <Line type="monotone" dataKey="revenue" stroke="#82ca9d" />
                                </LineChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col sm='12' md='6'>
                            <h4>Bar Chart</h4>
                            <ResponsiveContainer width="100%" height={350}>
                                <BarChart
                                    width={500}
                                    height={300}
                                    data={chartData}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="month" />
                                    <YAxis />
                                    <Tooltip />
                                    <Bar dataKey="revenue" fill="#8884d8" />
                                    <Bar dataKey="investment" fill="#82ca9d" />
                                    <Legend />
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                    </Row>
                </div>
            </Container>

        </>
    );
};

export default Charts;