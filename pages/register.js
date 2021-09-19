import React, { Fragment } from "react";
import ShareHeader from "../components/shareHeader/shareHeader";
import WizardForm from "../components/register/WizardForm";
import Register from "../components/shareHeader/shareHeader";

class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: null };
  }
  componentDidMount() {
    this.setState({ width: window.screen.width });
  }
  render() {
    const { width } = this.state;
    const img = width < 576 ? 1 : 2;
    return <Register img={img} />;
  }
}
export default register;
