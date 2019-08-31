
import { Row, Col, Button, Icon } from "antd";
import React from 'react'
const BelowCanter = (props) => {
    return (
        <div style={{ margin: "100px 0% 0% 11%" }}>
            <div style={{ width: "88%", minHeight: "40vh" }}>
                <Row >
                <Col span={12} >
                        <p style={{ fontSize: "20px",marginTop:"30%" }}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining
                            essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
                            Lorem Ipsum passages, and more recently with
                            desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                    </Col>
                    <Col span={8} offset={4}  >
                        <img src={require("../../images/image2.jpg")} style={{ width: "100%" }} />
                    </Col>
                    
                </Row>
            </div>
        </div>
    )
}
export default BelowCanter