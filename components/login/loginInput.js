import React from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Input, Button } from "antd";
import classes from "./loginInput.module.scss";
import * as Yup from "yup";
import { useFormik } from "formik";
const LoginInput = (props) => {
  const router = useRouter();
  const [error, seterror] = useState(null);
  const formik = useFormik({
    initialValues: {
      identifier: "",
      password: "",
      email: "",
    },
    validationSchema: Yup.object({
      identifier: Yup.string()
        .max(15, "Must be 15 characters or less")
        .required("Required"),
      password: Yup.string()
        .max(20, "Must be 20 characters or less")
        .required("Required"),
      // email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values.password, values.identifier);
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identifier: values.identifier,
          password: values.password,
        }),
      };
      fetch("http://localhost:1337/auth/local", requestOptions)
        .then((re) => re.json())
        .then((response) => {
          if (response && response.jwt) {
            router.push("/price");
          }
          // Handle success.
          console.log("Well done!");
          console.log("User profile", response);
          console.log("User token", response.jwt);
        })
        .catch((error) => {
          // Handle error.
          console.log("An error occurred:", error.response);
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={classes.main}>
        <Input
          placeholder="نام کاربری"
          id="identifier"
          name="identifier"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.firstName}
        />
        {formik.touched.firstName && formik.errors.firstName ? (
          <div>{formik.errors.firstName}</div>
        ) : null}
      </div>

      <div className={classes.main}>
        <Input
          placeholder="رمز عبور"
          id="password"
          name="password"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.lastName}
        />
        {formik.touched.lastName && formik.errors.lastName ? (
          <div>{formik.errors.lastName}</div>
        ) : null}
      </div>

      {/* <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null} */}

      <button className={classes.inputt} type="submit">
        ورود
      </button>
    </form>
  );
};
export default LoginInput;

{
  //  <div className={classes.main}>

  // </div>
  {
    /* <Input placeholder="ادرس ایمیل"></Input>
<Input placeholder="پسورد"></Input> */
  }
}
