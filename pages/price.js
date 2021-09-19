import Price from "../components/price/price";
import React from "react";
import Header from "../components/header/header";
import classes from "../components/shareHeader/shareHeader.module.scss";
import { Row, Col, Button } from "antd";

const yes = () => {
  let width = window.innerWidth;
  return (
    <div className={classes.container}>
      <div className={classes.addBackdrop}>
        {width && width < 576 && (
          <img src="/images/rr.png" alt="5 Terre" className={classes.image} />
        )}
        {width && width > 576 && (
          <img
            src="/images/Business illustrator.png"
            alt="5 Terre"
            className={classes.image}
          />
        )}
      </div>
      <div className={classes.test}>
        <Header />
        <div>
          {" "}
          <Row>
            <Col xl={6} lg={8} xs={17}>
              <Price
                title={"پکیج طلایی"}
                content={[
                  "پشتیبانی 24 ساعته ",
                  "خرید و فروش توسط متخصصان",
                  "امکان سفارش شخصی",
                  "کارمزد 3.5 درصد",
                  "پرداخت پس از رضایت",
                ]}
              ></Price>
            </Col>
            <Col xl={6} lg={8} xs={17}>
              <Price
                title={"پکیج نقره ای "}
                content={[
                  "پشتیبانی 24 ساعته ",
                  "خرید و فروش توسط متخصصان",
                  "امکان سفارش شخصی",
                  "کارمزد 3.5 درصد",
                  "پرداخت پس از رضایت",
                ]}
              ></Price>
            </Col>
            <Col xl={6} lg={8} xs={17}>
              <Price
                title={"پکیج برنز"}
                content={[
                  "پشتیبانی 24 ساعته ",
                  "خرید و فروش توسط متخصصان",
                  "امکان سفارش شخصی",
                  "کارمزد 3.5 درصد",
                  "پرداخت پس از رضایت",
                ]}
              ></Price>
            </Col>
            <Col xl={6} lg={12} xs={17}>
              <Price
                title={"مشاوره تخصصی "}
                content={[
                  "جواب به سوالات ",
                  " تحلیل  تکنیکال",
                  "کشیدن اندیکاتور",
                  "به صورت تماس تصویری",
                  "مقایسه و پیشبینی ",
                ]}
              ></Price>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default yes;
