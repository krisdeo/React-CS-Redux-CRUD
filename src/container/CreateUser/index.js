import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { BackComponent, FormComponent } from "../../components";
import { connect } from "react-redux";
import { postCreateUser } from "../../actions/UserAction";
import swal from "sweetalert";

class CreateUser extends Component {
  handleSubmit(data) {
    this.props.dispatch(postCreateUser(data));
  }

  render() {
    if (this.props.getResponseDataUser || this.props.errorResponseDataUser) {
      if (this.props.getResponseDataUser) {
        swal(
          "Sukses",
          "User " +
            this.props.getResponseDataUser.nama +
            " Berhasil Ditambahkan",
          "success"
        );
      }

      if (this.props.errorResponseDataUser) {
        swal(
          "Error",
          "Error Menambahkan User : " + this.props.errorResponseDataUser,
          "error"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>CreateUser</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)} />
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    getResponseDataUser: state.users.getResponseDataUser,
    errorResponseDataUser: state.users.errorResponseDataUser,
  };
};

export default connect(mapStateToProps, null)(CreateUser);
