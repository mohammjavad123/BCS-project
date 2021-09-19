import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import { Row, Col, Button } from "antd";
import Link from "next/link";
import classes from "./WizardForm.module.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";

const WizardFormThirdPage = (props) => {
  const { handleSubmit, pristine, previousPage, submitting } = props;
  return (
    <Fragment>
      <div className={classes.success}>
        <div className={classes.alert}>
          <div className={classes.text}>
            {" "}
            اطلاعات شما با موفقیت ثبت شد همکاران ما با شما تماس میگیرند
          </div>
        </div>
      </div>
      <Row>
        <Col lg={24} xs={24}>
          <div>
            <Button className={classes.backHome} onClick={previousPage}>
              <Link href="/">
                <a className={classes.listItemLink}>صفحه اصلی</a>
              </Link>
            </Button>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormThirdPage);
