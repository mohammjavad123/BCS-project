import Link from "next/link";
import classes from "./mainButtoms.module.scss";
import { Row, Col } from "antd";

const MainButtoms = () => {
  return (
    <div className={classes.main}>
      <Row justify="center">
        <Col lg={4} xs={12}>
          <span className="icon-bulb"></span>
          <Link href="/">
            <a className={classes.listItemLink}>استارتاپ ها</a>
          </Link>
        </Col>
        <Col lg={4} xs={12}>
          <span className="icon-news"></span>
          <Link href="/">
            <a className={classes.listItemLink}>پروژها</a>
          </Link>
        </Col>
        <Col lg={4} xs={12}>
          <span className="icon-study"></span>
          <Link href="/">
            <a className={classes.listItemLink}>پروژهای دانشگاهی</a>
          </Link>
        </Col>
        <Col lg={4} xs={12}>
          <span className="icon-banknote"></span>
          <Link href="/">
            <a className={classes.listItemLink}>فرصت های شغلی</a>
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default MainButtoms;
