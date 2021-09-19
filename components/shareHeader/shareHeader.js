import React from "react";
import classes from "./shareHeader.module.scss";
import Header from "../header/header";
import Register from "../register/WizardForm";
const shareHeader = (props) => {
  const img = props.img;
  // console.log(img);

  const src = img == 2 ? "/images/Business illustrator.png" : "/images/mob.jpg";
  return (
    <div className={classes.container}>
      <img src={src} alt="5 Terre" className={classes.image} />
      <div className={classes.test}>
        <Header />
        <Register />
      </div>
    </div>
  );
};
export default shareHeader;
