import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import { Button } from "antd";
import Link from "next/link";
import classes from "./WizardForm.module.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props;
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Field
          placeholder="نام"
          name="firstName"
          type="text"
          component={renderField}
        />
        <Field
          placeholder="نام خانوادگی"
          name="lastName"
          type="text"
          component={renderField}
        />
        <Field
          placeholder="شماره موبایل"
          name="phonenumber"
          type="text"
          component={renderField}
        />

        <div>
          <Button htmlType="submit" icon={<ArrowLeftOutlined />}>
            مرحله بعد
          </Button>
        </div>
      </form>
      <div className={classes.login}>
        <Link href="/">
          <a> قبلا ثبت نام کرده اید؟ورود</a>
        </Link>
      </div>
    </Fragment>
  );
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormFirstPage);
