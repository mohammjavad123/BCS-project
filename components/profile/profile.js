import React from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Header from "./profileHeader";
import classes from "./profile.module.scss";
const { Option } = Select;
import Minimenu from "./menu";

class profile extends React.Component {
  state = { visible: false };

  showDrawer = () => {
    this.setState({
      visible: true,
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  render() {
    return (
      <>
        <Header />
        <Row>
          <Col>
            <div className={classes.neworder}>
              <Button type="primary" onClick={this.showDrawer}>
                <PlusOutlined />
                ثبت سفارش
              </Button>
            </div>
          </Col>
          <Col>
            <div></div>
          </Col>
        </Row>

        <Drawer
          title="ثبت سفارش جدید"
          width={600}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                انصراف
              </Button>
              <Button onClick={this.onClose} type="primary">
                تایید
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="name"
                  label="اسم سهم"
                  rules={[{ required: true, message: "نام سهم را وارد کنید" }]}
                >
                  <Input placeholder="تعداد سهم را وارد کنید" />
                </Form.Item>
              </Col>
              <Col span={12}></Col>
            </Row>
            <Row>
              <Col span={12}>
                <Form.Item
                  name="نوع سفارش"
                  label="Type"
                  rules={[{ required: true, message: "" }]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="private">Private</Option>
                    <Option value="public">Public</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="مبلغ"
                  label="price"
                  rules={[
                    { required: true, message: "مبلغ مورد نظر را وارد کنید" },
                  ]}
                >
                  <Input placeholder="مبلغ مورد نظر را وارد کنید"></Input>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[
                    { required: true, message: "Please choose the dateTime" },
                  ]}
                >
                  <DatePicker.RangePicker
                    style={{ width: "100%" }}
                    getPopupContainer={(trigger) => trigger.parentElement}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="description"
                  label="توضیحات سفارش"
                  rules={[
                    {
                      required: true,
                      message: "توضیحات",
                    },
                  ]}
                >
                  <Input.TextArea
                    rows={4}
                    placeholder="please enter url description"
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
      </>
    );
  }
}
export default profile;
