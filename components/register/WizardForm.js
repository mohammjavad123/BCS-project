import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import WizardFormFirstPage from "./WizardFormFirstPage";
import WizardFormSecondPage from "./WizardFormSecondPage";
import WizardFormThirdPage from "./WizardFormThirdPage";
import Error from "./firstpage";
import { Steps, Button, message, Row, Col } from "antd";
import classes from "./WizardForm.module.scss";
import { connect } from "react-redux";

const { Step } = Steps;

const steps = [
  {
    title: "اطلاعات کاربری",
    content: "اطلاعات کاربری",
  },
  {
    title: "اطلاعات شخصی",
    content: "اطلاعات شخصی",
  },
  {
    title: "تایید اطلاعات",
    content: "تایید اطلاعات",
  },
];
class WizardForm extends Component {
  constructor(props) {
    super(props);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      current: 0,
      page: 1,
      width: null,
    };
  }
  componentDidMount() {
    this.setState({ width: window.screen.width });
  }

  nextPage() {
    this.setState({
      page: this.state.page + 1,
      current: this.state.current + 1,
    });
  }

  previousPage() {
    this.setState({
      page: this.state.page - 1,
      current: this.state.current - 1,
    });
  }

  render() {
    const { onSubmit } = this.props;
    const { page, current, width } = this.state;
    if (width) {
    }
    return (
      <Fragment>
        {width && width > 576 && (
          <div className={classes.steps}>
            {" "}
            <Steps current={current} direction="vertical">
              {steps.map((item) => (
                <Step key={item.title} title={item.title} />
              ))}
            </Steps>
          </div>
        )}

        <div className={classes.main}>
          <div className={classes.registerHeader}>ثبت نام</div>
          {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} />}
          {page === 2 && (
            <WizardFormSecondPage
              previousPage={this.previousPage}
              onSubmit={this.register}
              data={this.props.data}
              next={this.nextPage}
              register={this.register}
            />
          )}
          {page === 3 && (
            <WizardFormThirdPage
              previousPage={this.previousPage}
              onSubmit={onSubmit}
            />
          )}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  const { form } = state;
  if (form && form.wizard && form.wizard.values) {
    return { data: form.wizard.values };
  }
}

WizardForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default connect(mapStateToProps)(WizardForm);
