import React from "react";
import { Table } from "react-bootstrap";
import { connect } from "react-redux";

const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props ? props.getUserDetail.nama : ''}</td>
        </tr>
        <tr>
          <td width="200">Alamat</td>
          <td width="10">:</td>
          <td>{props ? props.getUserDetail.alamat : ''}</td>
        </tr>
        <tr>
          <td width="200">Umur</td>
          <td width="10">:</td>
          <td>{props ? props.getUserDetail.umur : ''}</td>
        </tr>
        <tr>
          <td width="200">No HP</td>
          <td width="10">:</td>
          <td>{props ? props.getUserDetail.noHp : ''}</td>
        </tr>
      </tbody>
    </Table>
  );
};

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    errorUserDetail: state.users.errorUserDetail,
  };
};

export default connect(mapStateToProps, null)(DetailUserComponent);
