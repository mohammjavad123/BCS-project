import React, { Fragment } from "react";
import classes from "./footer.module.scss";
import Link from "next/link";
import { Input } from "antd";
import { Button } from "antd";
import { Divider } from "antd";

import { Row, Col } from "antd";
import {
  TwitterOutlined,
  YoutubeOutlined,
  LinkedinOutlined,
  InstagramOutlined,
  SendOutlined,
} from "@ant-design/icons";
const footer = (props) => {
  return (
    <Fragment>
      <div className={classes.footer}>
        <div className={classes.footerTop}>
          {" "}
          <Row>
            <Col lg={5} xs={24}>
              کارگزار رتبه الف
              <Row>
                <Col>
                  <div className={classes.footermiddle}>
                    {" "}
                    ابزارهای معاملاتی یا تراکنش های مالی تمام ارتباط ما با شما
                    نخواهد بود. کارشناسان و مشاوران ما در تمام مسیر همراه شما
                    خواهند بود. مسئولیت همیشه متوجه ماست.
                  </div>{" "}
                </Col>
              </Row>
            </Col>
            <Col lg={5} push={2} xs={24}>
              ارتباط با ما
              <div className={classes.footericons}>
                <Row>
                  <Col span={6}>
                    {" "}
                    <InstagramOutlined />
                  </Col>
                  <Col span={6}>
                    {" "}
                    <TwitterOutlined />
                  </Col>
                  <Col span={6}>
                    {" "}
                    <YoutubeOutlined />
                  </Col>
                  <Col span={6}>
                    {" "}
                    <LinkedinOutlined />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col lg={5} push={4} xs={24}>
              لینک‌های مفید
              <div className={classes.footermiddle}>
                <Row>
                  <Col span={12} pull={4}>
                    {" "}
                    <Link href="/about">
                      <a className={classes.listItemLink}>درباره ما</a>
                    </Link>
                  </Col>
                  <Col span={12} pull={4}>
                    {" "}
                    <Link href="/price">
                      <a className={classes.listItemLink}>تعرفه ها</a>
                    </Link>
                  </Col>{" "}
                </Row>
                <Row>
                  <Col span={12} pull={4}>
                    {" "}
                    <Link href="/register">
                      <a className={classes.listItemLink}>ثبت نام</a>
                    </Link>
                  </Col>
                  <Col span={12} pull={4}>
                    {" "}
                    <Link href="/">
                      <a className={classes.listItemLink}>خانه</a>
                    </Link>
                  </Col>{" "}
                </Row>
              </div>
            </Col>
            <Col lg={5} push={3} xs={24}>
              نماد ها
              <div className={classes.footericons}>
                <Row>
                  <div className={classes.mainkhabar}>
                    <Col span={20}>
                      <div className={classes.khabarname}>
                        <img
                          className={classes.enemad}
                          src="/images/re.png"
                          alt="enemad"
                        />{" "}
                      </div>
                    </Col>
                    <Col span={4} pull={4}>
                      <Button>{/* <SendOutlined /> */}</Button>
                    </Col>
                  </div>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <div style={{ marginLeft: "40%" }}></div>
        <Divider />
        <Row>
          <Col lg={18}>
            <div>تمامی حقوق برای شرکت ما محفوظ است.</div>
          </Col>
          <Col lg={6}>
            <div style={{ widows: "40%", height: "30%" }}>
              {" "}
              {/* <img src="/images/inemad.jpg" className={classes.img}></img> */}
            </div>
          </Col>
        </Row>
      </div>
    </Fragment>
  );
};
export default footer;
