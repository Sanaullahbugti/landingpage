
import { Row, Col, Button, Icon } from "antd";
import React from 'react'
const CenteralPart = (props) => {
    return (
        <div style={{ margin: "500px 0% 0% 11%" }}>
            <div style={{ width: "80%", minHeight: "40vh" }}>
                <Row >
                    <Col span={12}>
                        <img src={require("../../images/image3.jpg")} style={{ width: "80%" }} />
                    </Col>
                    <Col span={12}>
                        <h2 style={{ fontSize: "30px", paddingBottom: "80px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h2>
                        <p style={{ fontSize: "20px", marginBottom: "50px" }}><Icon size="large" type="check" style={{ color: "green" }} />At vero eos et accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium
						        voluptatum deleniti atque corrupti quos dolores</p>
                        <p style={{ fontSize: "20px", marginBottom: "50px" }}><Icon size="large" type="check" style={{ color: "green" }} />At vero eos et accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium
						        voluptatum deleniti </p>
                        <p style={{ fontSize: "20px", marginBottom: "50px" }}><Icon size="large" type="check" style={{ color: "green" }} />At vero eos et accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium
						        voluptatum</p>
                        <p style={{ fontSize: "20px", marginBottom: "50px" }}><Icon size="large" type="check" style={{ color: "green" }} />At vero eos et accusamus et iusto odio dignissimos ducimus
                        qui blanditiis praesentium  deleniti atque corrupti quos dolores
						        voluptatum deleniti atque corrupti quos dolores</p>
                        <Button style={{
                            padding: "5px",
                            background: "black",
                            color: "white",
                            width: "20%",
                            marginRight: "15px",
                            height: "40px",
                            marginLeft: "30%"
                        }}>SIGN UP</Button>
                        <Button style={{
                            padding: "5px",
                            background: "white",
                            width: "20%",
                            height: "40px"
                        }}>LEARN MORE</Button>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
export default CenteralPart