import React from "react";
import { Row, Col, Divider, Button } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

import classes from "./price.module.scss";
const price = (props) => {
  const top = () => {
    window.scroll(0, 0);
  };
  return (
    <div className={classes.main}>
      <div className={classes.top}>{props.title}</div>
      <div className={classes.content}>
        <div style={{ marginTop: "9%" }}>
          <Row>
            <Col span={24}>
              {" "}
              <CheckCircleOutlined
                style={{ fontSize: "16px", color: "#08c" }}
              />
              {props.content[0]}
              <Divider orientation="right" plain dashed={true}></Divider>
            </Col>
            <Col span={24}>
              {" "}
              <CheckCircleOutlined
                style={{ fontSize: "16px", color: "#08c" }}
              />
              {props.content[1]}
              <Divider orientation="right" plain dashed={true}></Divider>
            </Col>
            <Col span={24}>
              {" "}
              <CheckCircleOutlined
                style={{ fontSize: "16px", color: "#08c" }}
              />
              {props.content[2]}
              <Divider orientation="right" plain dashed={true}></Divider>
            </Col>
            {/* <Col span={24}>
              {" "}
              <CheckCircleOutlined
                style={{ fontSize: "16px", color: "#08c" }}
              />
              {props.content[3]}
              <Divider orientation="right" plain dashed={true}></Divider>
            </Col> */}
            <Col span={24}>
              {" "}
              <CheckCircleOutlined
                style={{ fontSize: "16px", color: "#08c" }}
              />
              {props.content[4]}
            </Col>
            <Col span={16}>
              <div className={classes.antButton}>
                <Button onClick={top}>سفارش</Button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default price;
