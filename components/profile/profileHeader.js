import Link from "next/link";
import classes from "./profile.module.scss";
import { Row, Col, Badge, Avatar, Menu } from "antd";
import { ConfigProvider } from "antd";
import Minimenu from "./menu";

const ProfileHeader = () => {
  return (
    <>
      <ConfigProvider direction="ltr">
        <div className={classes.main}>
          <Row>
            <Col lg={4}>
              <div className={classes.badge}>
                <a href="#">
                  <Badge count={5}>
                    <Avatar
                      shape="square"
                      size="large"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFQG3S7T9k2dDjI2sYZD3fcVHxsTZZjewDsxoY4FUM5KxfraHMo9_x6uCjj7J70X7Dkb4&usqp=CAU"
                    />
                  </Badge>
                </a>
              </div>
            </Col>
            <Col lg={4} pull={2}>
              <div className={classes.name}>خوش امدید</div>
            </Col>
            <Col lg={4} pull={4}>
              <div className={classes.name}>محمد کاظم رجبی</div>
            </Col>
          </Row>
        </div>
      </ConfigProvider>
    </>
  );
};

export default ProfileHeader;
