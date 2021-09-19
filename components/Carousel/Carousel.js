import { Carousel } from "antd";
import React, { Fragment } from "react";
import classes from "./Caruosel.module.scss";

const contentStyle = {
  height: "300px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};
const settings = {
  dots: true,
  infinite: true,
  speed: 100,
};
const carousel = (props) => {
  return (
    <Fragment>
      <Carousel {...settings} autoplay>
        <div>
          <h3 style={contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </Fragment>
  );
};

export default carousel;
