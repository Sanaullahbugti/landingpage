import React from "react";
import { Row, Col, Button, Icon, Card } from "antd";
import Text from "antd/lib/typography/Text";
const Footer = () => {
    return (
        <Row >
            <Card style={{ marginTop: "30vh", marginLeft: "10%", width: "80%", minHeight: "40vh" }}>
                
                <Row style={{ minHeight: "30vh" }}>
                <Col span={4}>
                       <Row> <img src={require("../../images/logo.png")} style={{ width: "150px" }} /></Row>
                       <Row style={{marginTop:"80%"}}><Icon type="copyright" />2019 all rights are reserved</Row>
                </Col>
                <Col span={4} offset={1}>
                    <Row>
                        <h1 style={{marginTop:"5px"}}>SHOP</h1>
                    </Row>
                    <Row>
                        <h1 style={{marginTop:"5px",color:"grey"}}>All</h1>
                    </Row>
                    <Row>
                        <h1 style={{marginTop:"5px",color:"grey"}}>Dresses</h1>
                    </Row>
                    <Row>
                        <h1 style={{marginTop:"5px",color:"grey"}}>Shoes</h1>
                    </Row>
                    <Row>
                        <h1 style={{marginTop:"5px",color:"grey"}}>Bags</h1>
                    </Row>
                </Col>
                <Col span={4} offset={1} >
                    <Row>
                        <h1 style={{marginTop:"5px"}}>HELP</h1>
                    </Row>
                    <Row>
                        <h1 style={{marginTop:"5px",color:"grey"}}>How It Works</h1>
                    </Row>
                    <Row>
                        <h1 style={{marginTop:"5px",color:"grey"}}>FAQs</h1>
                    </Row>
                    <Row>
                        <h1 style={{marginTop:"5px",color:"grey"}}>My Orders</h1>
                    </Row>
                </Col>
                <Col span={4} offset={1}>
                    <Row>
                        <h1 style={{marginTop:"5px"}}>ABOUT US</h1>
                    </Row>
                    <Row>
                        <h1 style={{marginTop:"5px",color:"grey"}}>About</h1>
                    </Row>
                    <Row>
                        <h1 style={{marginTop:"5px",color:"grey"}}>Contact Us</h1>
                    </Row>
                </Col>
                <Col span={4} offset={1}>
                    <Row>
                        <h1 style={{marginTop:"5px"}}>FOLLOW US</h1>
                    </Row>
                    <Row>
                        <h1 style={{marginTop:"5px",color:"grey"}}>Facebook</h1>
                    </Row>
                    <Row>
                        <h1 style={{marginTop:"5px",color:"grey"}}>Tweeter</h1>
                    </Row>
                </Col>
                    <div style={{
                        margin: "0 20% 2% 20%"
                    }}>
                        
                    </div>
                </Row>
                <Row>
                   
                </Row>
            </Card>
        </Row>
    )
}

export default Footer;