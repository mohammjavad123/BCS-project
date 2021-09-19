import Link from "next/link";
import classes from "./header.module.scss";
import { Row, Col, Button } from "antd";
import React, { useState } from "react";
import Modal from "../modal/modal";
import Phoneheader from "./phoneHeader";
import { WhatsAppOutlined } from "@ant-design/icons";
class Header extends React.Component {
  state = { visible: false, phone: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  render() {
    let width = window.screen.width ? window.screen.width : null;
    if (width && width < 576) {
      // this.setState({ phone: true, visible: false });
      console.log(width);
    }
    console.log(this.state);
    if (width && width < 576) {
      component = <Phoneheader />;
    }
    let component = (
      <div className={classes.main}>
        <Row>
          <Col lg={2} xs={24}>
            <img className={classes.logo} src="/images/protizericon.png" />
          </Col>
          <Col lg={2} xs={5}>
            {" "}
            <Link href="/">
              <a className={classes.listItemLink}>صفحه اصلی</a>
            </Link>
          </Col>
          <Col lg={2} xs={3}>
            {" "}
            <Link href="/price">
              <a className={classes.listItemLink}>تعرفه ها</a>
            </Link>
          </Col>
          <Col lg={2} xs={4}>
            {" "}
            <Link href="/news">
              <a className={classes.listItemLink}>خبرها</a>
            </Link>
          </Col>
          <Col lg={3} xs={7}>
            {" "}
            <Link href="/aboat">
              <a className={classes.listItemLink}> درباره ما </a>
            </Link>
          </Col>
          <Col lg={3} xs={7}>
            {" "}
            <Link href="/register">
              <a className={classes.listItemLink}>ثبت نام</a>
            </Link>
          </Col>
          <Col lg={3} push={1} xs={8}>
            <div className={classes.test}>
              <Modal />
            </div>
          </Col>
          {/* <Col lg={3} xs={4} xs={8}>
            {" "}
            <Link href="/register">
              <a className={classes.listItemLink}>ورود</a>
            </Link>
          </Col> */}
          <Col lg={3} xs={4} xs={8} pull={4}>
            {" "}
            <Link href="https://api.whatsapp.com/send/?phone=989034732967&text&app_absent=0">
              <a className={classes.listItemLink}>
                <WhatsAppOutlined
                  style={{ color: "green", fontSize: "18px" }}
                />
                <span> پشتیبانی</span>
              </a>
            </Link>
          </Col>
        </Row>
        <style global jsx>
          {`
            .ant-modal-header {
              border: none;
              border-bottom: none;
            }
          `}
        </style>
        <style global jsx>
          {`
            .ant-modal-body {
              background-color: #f7f8fa;
            }
          `}
        </style>
        <style global jsx>
          {`
            .ant-modal-content {
              width: 80%;
            }
          `}
        </style>
      </div>
    );
    if (width && width < 576) {
      component = <Phoneheader />;
    }
    return component;
  }
}

export default Header;
