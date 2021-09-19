import React, { Fragment } from "react";
import { Field, reduxForm } from "redux-form";
import validate from "./validate";
import renderField from "./renderField";
import { Row, Col, Button } from "antd";
import Link from "next/link";
import classes from "./WizardForm.module.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useState } from "react";
const renderError = ({ meta: { touched, error } }) =>
  touched && error ? <span>{error}</span> : false;

const WizardFormSecondPage = (props) => {
  const { handleSubmit, previousPage } = props;
  const [error, seterror] = useState(null);
  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <Field
          placeholder="نام کاربری"
          name="username"
          type="text"
          component={renderField}
        />
        <Field
          placeholder="ایمیل "
          name="email"
          type="text"
          component={renderField}
        />
        <Field
          placeholder="پسورد "
          name="password"
          type="text"
          component={renderField}
        />
        <div className={classes.mainFooter}>
          <div className={classes.FotterButtons}>
            <Row>
              <Col lg={12}>
                <div className={classes.secondPageButtonBack}>
                  <Button onClick={previousPage}>مرحله قبل</Button>
                </div>
              </Col>
              <Col lg={12}>
                <div className={classes.secondPageButtonNext}>
                  <Button
                    htmlType="submit"
                    onClick={handleSubmit((data) => {
                      // console.log(props.data);
                      const requestOptions = {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({
                          username: props.data.username,
                          email: props.data.email,
                          password: props.data.password,
                        }),
                      };
                      fetch(
                        "http://localhost:1337/auth/local/register",
                        requestOptions
                      )
                        .then((response) => response.json())

                        // .then((r) => console.log("lkkkkk" + error))
                        .then((res) => {
                          if (
                            res &&
                            res.data &&
                            res.data[0] &&
                            res.data[0].messages[0].message
                          ) {
                            // console.log(res.data[0].messages[0].message);
                            seterror(res.data[0].messages[0].message);
                            // console.log(error);
                          } else if (
                            !res &&
                            !res.data &&
                            !res.data[0] &&
                            !res.data[0].messages[0].message
                          ) {
                            props.next();
                          } else {
                            props.next();
                          }
                        });
                    })}
                  >
                    مرحله بعد
                  </Button>
                </div>
              </Col>
            </Row>
            <div className={classes.error}>
              {" "}
              {error && <div> {error} </div>}
            </div>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default reduxForm({
  form: "wizard", //                 <------ same form name
  destroyOnUnmount: false, //        <------ preserve form data
  forceUnregisterOnUnmount: true, // <------ unregister fields on unmount
  validate,
})(WizardFormSecondPage);
