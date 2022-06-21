import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import { useParams, withRouter } from "react-router";
import { getUserDetail } from "../../actions/UserAction";
import { BackComponent, DetailUserComponent } from "../../components";
 

class DetailUser extends Component {

  componentDidMount() {
    this.props.dispatch(getUserDetail(this.props.params.id))
  }

  render() {
    console.log('DetailUser props >>> ', this.props);
    return (
      <Container>
        <BackComponent />
        {/* <h1>Detail User {this.props.params.id}</h1> */}
        <h1>Detail User</h1>
        <DetailUserComponent/>
      </Container>
    );
  }
}

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

export default connect() (withParams(DetailUser));

