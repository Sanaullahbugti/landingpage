import React from 'react'
import {  Card, Col, Row, Button,Typography } from 'antd';
const {Paragraph} = Typography;


const Home = (props) => {
    return (
        <Card style={{ height: "60vh", background: 'linear-gradient(45deg, rgb(174,132,142) 30%, rgb(208,185,170) 90%)', }}>
            <Row>
                <Row><img src={require("../../images/logo.png")} style={{ width: "150px" }} /></Row>
                <Col span={16}>
                </Col>
                <Col span={6}>
                    <img src={require("../../images/home.png")} style={{ width: "400px" }} />
                </Col>
                <Row >
                    <Card style={{ marginTop: "30vh", marginLeft: "10%", width: "80%", minHeight: "40vh" }}>
                        <Row style={{ marginTop: "0px" }}><Col span={10}></Col>
                        <Col span={4}>
                            <img src={require("../../images/logo.png")} style={{ width: "150px" }} /></Col>
                            <Col span={10}></Col>
                        </Row>
                        <Row style={{ minHeight: "30vh" }}>

                            <div style={{
                                margin: "0 20% 2% 20%"
                            }}>
                                <Paragraph ellipsis={{ rows: 3, expandable: true }} style={{fontSize:"20px"}}>
                                    Lorem Ipsum is simply dummy
                                    text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type
                                    specimen book. It has survived not only five centuries, but also the leap
                                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
										</Paragraph>
                            </div>
                        </Row>
                        <Row>
                            <Col offset={8}>
                                <Button style={{
                                    padding: "5px",
                                    background: "black",
                                    color: "white",
                                    width: "20%",
                                    marginRight: "15px",
                                    height: "40px"
                                }}>SIGN UP</Button>
                                <Button style={{
                                    padding: "5px",
                                    background: "white",
                                    width: "20%",
                                    height: "40px"
                                }}>LEARN MORE</Button>
                            </Col>
                        </Row>
                    </Card>
                </Row>
            </Row>
        </Card>
    )
}
export default Home