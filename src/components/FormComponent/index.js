import React, { Component } from "react";
import { Col, FormGroup, Row, Button, Form, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import UserValidation from "../../validations/UserValidation";

const renderField = ({
  input,
  type,
  placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Form htmlForm="{input}" className="col-form-label">
        {label}
      </Form>
    </Col>
    <Col md="12">
      <InputGroup>
        <Form.Control
          {...input}
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          readOnly={readOnly}
        />
      </InputGroup>
      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

class FormComponent extends Component {
  render() {
    console.log("FormComponent getUserDetail >>> ", this.props);
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nama"
                component={renderField}
                label="Nama : "
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="Alamat : "
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="noHp"
                component={renderField}
                label="No HP : "
              />
            </FormGroup>
          </Col>

          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="umur"
                component={renderField}
                label="Umur : "
              />
            </FormGroup>
          </Col>
        </FormGroup>

        <FormGroup row className="my-0 mt-3 mb-3">
          <Col md="12">
            <FormGroup>
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
              >
                Submit
              </Button>
            </FormGroup>
          </Col>
        </FormGroup>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    // getUserDetail: state.users.getUserDetail,
    // errorUserDetail: state.users.errorUserDetail,
    initialValues: {
      nama: state.users.getUserDetail.nama,
      noHp: state.users.getUserDetail.noHp,
      alamat: state.users.getUserDetail.alamat,
      umur: state.users.getUserDetail.umur,
    },
  };
};

FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);
export default connect(mapStateToProps, null)(FormComponent);
