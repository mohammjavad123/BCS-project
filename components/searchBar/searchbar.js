import { Col, Input, Row, Select, Button } from "antd";
import { InfoCircleOutlined, UserOutlined } from "@ant-design/icons";

import classes from "./searchbar.module.scss";

const { Option } = Select;
const { Search } = Input;

const SearchIcon = () => {
  return (
    <div>
      <span className="icon-search"></span>
    </div>
  );
};

const SearchBar = () => {
  return (
    <div className={classes.main}>
      <div>
        <Row>
        <Col lg={1} xs={2}>
        <Button>
        <span className="icon-search"></span>
        </Button>
       
        </Col>
          <Col lg={17} xs={10}>
            <div className={classes.input}>
            
              <Input size="large" placeholder="جستجو در بین پروژه ها و آگهی ها">
              </Input>
            </div>
          </Col>
          <Col lg={6} xs={12}>
            <div>
              <Select placeholder="عنوان پروژه">
                <Option>علی</Option>
                <Option>جواد</Option>
                <Option>احمد</Option>
                <Option>خسرو</Option>
              </Select>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default SearchBar;
