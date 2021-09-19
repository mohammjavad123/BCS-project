import Link from "next/link";
import { Row, Col, Button } from "antd";
import classes from "./aboutus.module.scss";
import React, { useState } from "react";
const about = (props) => {
  return (
    <div className={classes.main}>
      <div>درباره ما</div>
      <div className={classes.top}>
        ما در تلاش هستیم تا با به کارگیری نیروی جوان ایرانی و با استفاده از
        تکنیک های روانشناسی، محتوای تبلیغاتی فوق العاده ای را در اختیار صاحبان
        کسب و کار قرار دهیم. توجه داشته باشید تبلیغات می توانند به عنوان یک چاقو
        عمل کند! باید مراقب باشید دست خودتان را نبرید. منظور از این جمله آن است
        که تبلیغات گاها می تواند نه تنها برایتان جذب نداشته باشد بلکه به کسب و
        کارتان نیز آسیب بزند. تبلیغات کار هر کسی نیست و افراد باید تجربه دیجیتال
        مارکتینگ را حتما داشته باشند. استفاده از تبلیغ هایی با محتوای نادرست هر
        لحظه می تواند بر علیه کسب و کارتان باشد و موجب زمین خوردن شما شود لذا
        سعی کنید با استفاده از متخصصین باتجربه و خبر در زمینه تبلیغات و
        بازاریابی حتما مشورت کنید و قبل از هر اقدامی نظر آنان را جویا شوید.برای
        همکاری با مت و پیوستن به ما ثبت نام کنید تا همکاران ما با شما تماس
        بگیرند
      </div>
    </div>
  );
};
export default about;
