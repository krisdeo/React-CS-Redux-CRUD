import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { BackComponent, FormComponent } from "../../components";
import { getUserDetail, putUserEdit } from "../../actions/UserAction";
import { useParams } from "react-router";
import swal from "sweetalert";

class EditUser extends Component {
  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.params.id));
  }

  handleSubmit(data) {
    this.props.dispatch(putUserEdit(data, this.props.params.id));
  }

  render() {
    if (this.props.getResponseDataUser || this.props.errorResponseDataUser) {
      if (this.props.getResponseDataUser) {
        swal(
          "Sukses",
          "User " +
            this.props.getResponseDataUser.nama +
            " Berhasil Update",
          "success"
        );
      }

      if (this.props.errorResponseDataUser) {
        swal(
          "Error",
          "Error Update User : " + this.props.errorResponseDataUser,
          "error"
        );
      }
    }
    return (
      <Container>
        <BackComponent />
        <h1>Edit User</h1>
        <FormComponent onSubmit={(data) => this.handleSubmit(data)}/>
      </Container>
    );
  }
}

function withParams(Component) {
  return (props) => <Component {...props} params={useParams()} />;
}

const mapStateToProps = (state) => {
  return {
    getResponseDataUser: state.users.getResponseDataUser,
    errorResponseDataUser: state.users.errorResponseDataUser,
  };
};

export default connect(mapStateToProps, null)(withParams(EditUser));
