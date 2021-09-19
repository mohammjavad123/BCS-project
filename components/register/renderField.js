import React from 'react';
import { Input } from "antd";

const renderField = ({ input,placeholder ,type, meta: { touched, error } }) => (
  <div>
    <div>
      <Input {...input} placeholder={placeholder} type={type} />
      {touched && error && <div style={{color:"red"}}>{error}</div>}
    </div>
  </div>
);

export default renderField;
