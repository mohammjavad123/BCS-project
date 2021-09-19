import { Col, Row } from "antd";
import { Divider } from "antd";
import Link from "next/link";
import classes from "./layout.module.scss";
import Header from "../components/header/header";
import MainButtoms from "./mainbuttoms/mainButtoms";
import SearchBar from "./searchBar/searchbar";
import LoginInput from "./login/loginInput";
class Layout extends React.Component {
  render() {
    const { img } = this.props;
    const src = img ? img : "/images/header.jpg";
    return (
      <div className={classes.container}>
        <img src={src} alt="5 Terre" className={classes.image} />
        <div className={classes.test}>
          <Header />
          {/* <SearchBar /> */}
          <div className={classes.MainButtons}>{/* <MainButtoms /> */}</div>
          {/* <Divider orientation="right" plain style={{ colot: "#F7F8FA" }}>
            <span className={`icon-cup Devider`}></span>پروژهای برتر
          </Divider> */}
        </div>
      </div>
    );
  }
}

export default Layout;
