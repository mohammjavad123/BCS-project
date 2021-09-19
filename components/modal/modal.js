import { Modal, Button } from "antd";
import LoginInput from "../login/loginInput";
import { Col, Row } from "antd";
import Link from "next/link";
import classes from "./modal.module.scss";
class modal extends React.Component {
  state = { visible: false };

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
    return (
      <>
        <div className={classes.main}>
          <div className={classes.test}>
            <Button className={classes.signin} onClick={this.showModal}>
              ورود
            </Button>
            <Modal
              footer={null}
              style={{ top: "5vw", left: "-59vh", width: "70%" }}
              title="ورود"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}
            >
              <LoginInput />
              <div className={classes.resetPassword}>
                <Link href="/">
                  <a>فراموشی رمز عبور</a>
                </Link>
                <div>
                  <Row>
                    <Col lg={24}>
                      <div className={classes.registerButtom}>
                        <Link href="/">
                          <a>ثبت نام</a>
                        </Link>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </Modal>
          </div>
        </div>
      </>
    );
  }
}

export default modal;
