import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteUserDetail, getUsersList, userAction } from "../../actions/UserAction";
import { TableComponent } from "../../components";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
    
    };
  }

  componentDidMount () {
    //Untuk get users pada reducer
    this.props.dispatch(getUsersList())
    this.props.dispatch(deleteUserDetail())
  }

  render() {
    console.log('home props >>> ',this.props);
    return (
      <div>
        <TableComponent/>
      </div>
    );
  }
}

export default connect() (Home)
