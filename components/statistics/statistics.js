import React, { Fragment } from "react";
import { Row, Col } from "antd";
import { Divider } from "antd";
import classes from "./statistics.module.scss";
import {
  IdcardOutlined,
  WhatsAppOutlined,
  TrophyOutlined,
  InstagramOutlined,
  BarChartOutlined,
  RocketOutlined,
} from "@ant-design/icons";
const statistics = (props) => {
  return (
    <Fragment>
      <Divider
        orientation="right"
        plain
        style={{ colot: "#F7F8FA" }}
        dashed={true}
      >
        <span className="icon-cup"></span> آمار وارقام
      </Divider>
      <div className={classes.main}>
        <Row justify="center">
          <Col lg={6} xs={24} sm={12}>
            <div className={classes.statisticssqr}>
              <div className={classes.statisticsicons}>
                <RocketOutlined />
              </div>
              <div className={classes.statisticscir}>
                <div className={classes.statisticsNumber}>85</div>
                <div className={classes.statisticsTitle}>مقالات بورسی </div>
              </div>
            </div>
          </Col>

          <Col lg={6} xs={24} sm={12}>
            <div className={classes.statisticssqr}>
              <div className={classes.statisticsicons}>
                <BarChartOutlined />
              </div>
              <div className={classes.statisticscir}>
                <div className={classes.statisticsNumber}>34</div>
                <div className={classes.statisticsTitle}>تعداد مشتریان</div>
              </div>
            </div>
          </Col>
          <Col lg={6} xs={24} sm={12}>
            <div className={classes.statisticssqr}>
              <div className={classes.statisticsicons}>
                <TrophyOutlined />
              </div>

              <div className={classes.statisticscir}>
                <div className={classes.statisticsNumber}>56</div>
                <div className={classes.statisticsTitle}> مشاوران فعال</div>
              </div>
            </div>
          </Col>
          <Col lg={6} xs={24} sm={12}>
            <div className={classes.statisticssqr}>
              <div className={classes.statisticsicons}>
                <IdcardOutlined />{" "}
              </div>
              <div className={classes.statisticscir}>
                <div className={classes.statisticsNumber}>21</div>
                <div className={classes.statisticsTitle}> مطالب اموزشی</div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <style global jsx>
        {`
          .ant-divider-horizontal.ant-divider-with-text::before,
          .ant-divider-horizontal.ant-divider-with-text::after {
            border-top: 1px solid #220939;
          }
        `}
      </style>
    </Fragment>
  );
};
export default statistics;
