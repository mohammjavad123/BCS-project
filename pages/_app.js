import "antd/dist/antd.css";
import Page from "react-page-loading";
import "../styles/styles.scss";
import React from "react";
import { wrapper } from "../store/store";
import "../icomon/icons.css";
import { ConfigProvider } from "antd";
const App = ({ Component, pageProps }) => {
  return (
    <ConfigProvider direction="rtl">
      <Page loader={"bubble"} color={"#220939"} size={4}>
        <Component {...pageProps} />
      </Page>
    </ConfigProvider>
  );
};

export default wrapper.withRedux(App);
