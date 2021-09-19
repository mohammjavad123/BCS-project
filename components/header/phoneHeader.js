import React, { useState } from "react";
import { Drawer, Button, Row, Col } from "antd";
import classes from "./phoneHeader.module.scss";
import Class from "../modal/modal.module.scss";
import Modal from "../modal/modal";
import Link from "next/link";
import { UnorderedListOutlined, WhatsAppOutlined } from "@ant-design/icons";
const phoneheader = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <Row>
        <Col span={7} push={1}>
          <div className={classes.main}>
            <div className={classes.img}>
              {" "}
              <UnorderedListOutlined
                style={{ fontSize: "25px", color: "black" }}
                onClick={showDrawer}
              />
            </div>
          </div>
        </Col>
        {/* <Col span={4} push={10}>
          <img
            className={classes.logo}
            onClick={showDrawer}
            src="/images/protizericon.png"
          />
        </Col> */}
        <Col span={4} push={10}>
          <div className={Class.mobtest}>
            <Modal />
          </div>
        </Col>
        {/* <Col span={4}>
          <Row>
            <Col span={5} pull={3 }>
              {" "}
              <Link href="https://api.whatsapp.com/send/?phone=989034732967&text&app_absent=0">
                <a className={classes.listItemLink}>
                  <WhatsAppOutlined
                    style={{ color: "green", fontSize: "18px" }}
                  />
                </a>
              </Link>
            </Col>
            <Col span={18}>
              <Link href="https://api.whatsapp.com/send/?phone=989034732967&text&app_absent=0">
                <a className={classes.listItemLink}>09034732967</a>
              </Link>
            </Col>
          </Row>{" "}
        </Col> */}
      </Row>

      <Drawer
        title="اسم یا نماد شرکت"
        placement="right"
        closable={false}
        onClose={onClose}
        visible={visible}
      >
        <p>
          {" "}
          <Link href="/">
            <a className={classes.listItemLink}>صفحه اصلی</a>
          </Link>
        </p>
        <p>
          {" "}
          <Link href="/price">
            <a className={classes.listItemLink}>تعرفه ها</a>
          </Link>
        </p>
        <p>
          <Link href="/sample">
            <a className={classes.listItemLink}>درباره ما </a>
          </Link>
        </p>
        <p>
          {" "}
          <Link href="/register">
            <a className={classes.listItemLink}> ثبت نام</a>
          </Link>
        </p>
        <p>
          <Link href="/about">
            <a className={classes.listItemLink}>درباره ما</a>
          </Link>
        </p>

        <p>
          <Link href="https://api.whatsapp.com/send/?phone=989034732967&text&app_absent=0">
            <a className={classes.listItemLink}>
              <WhatsAppOutlined style={{ color: "green", fontSize: "18px" }} />
              ارتباط با پشتیبانی
            </a>
          </Link>
        </p>
      </Drawer>
      <style global jsx>
        {`
          .ant-modal-content {
            left: 50% !important;
          }
        `}
      </style>
    </>
  );
};
export default phoneheader;
