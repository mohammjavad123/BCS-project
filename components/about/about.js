import { Col, Row } from "antd";
import React, { Fragment } from "react";

import { Divider } from "antd";
import classes from "./abaut.module.scss";

const about = (props) => {
  var img = `${props.img}`;
  return (
    <div>
      <Divider orientation="right" plain dashed={true}>
        <span className="icon-cup"></span>
        {props.title}
      </Divider>
      <Row>
        <Col lg={12} xs={24}>
          <div className={classes.text}>{props.content}</div>
        </Col>
        <Col lg={12} xs={24}>
          <div>
            <img className={classes.img} src={img} alt="ihih" />
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default about;
