import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Button, Row, Col, Spinner } from "react-bootstrap";
import BootstrapTable from "react-bootstrap-table-next";
import {
  faEdit,
  faInfo,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
// import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";
import { deleteUserData } from "../../actions/UserAction";

// const mencobaSaja = async (props, id) => {
//   // do something
//   await props.dispatch(deleteUserData(id));
//   // await console.log('deleteResponse >>> ',deleteResponse);
//      await console.log('props.getResponseDeleteUser >>> ',props.getResponseDeleteUser);

// }

const TableComponent = (props) => {
  // console.log(
  //   "const errorResponseDeleteUser >>> ",
  //   props.errorResponseDeleteUser
  // );

  const alertDone = () => {
    console.log("errorResponseDeleteUser >>> ", errorResponseDeleteUser);

    if (!errorResponseDeleteUser) {
      swal("Berhasil Dihapus!", {
        icon: "success",
      });
    } else {
      swal("Gagal Menghapus Data!");
    }
  };

  let errorResponseDeleteUser = props.errorResponseDeleteUser;

  const { SearchBar } = Search;

  const handleClick = (id) => {
    console.log("willDelete dispatch >>> ", props.dispatch);

    swal({
      title: "Apakah Anda Yakin Akan Menghapus Data Ini?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        props.dispatch(deleteUserData(id));

        console.log(
          "TableComponent errorResponseDeleteUser >>> ",
          props.errorResponseDeleteUser
        );

        setTimeout(() => {
          alertDone();

          // console.log(
          //   "TableComponent errorResponseDeleteUser timeout >>> ",
          //   props.errorResponseDeleteUser
          // );

          // if (!props.errorResponseDeleteUser) {
          //   swal("Berhasil Dihapus!", {
          //     icon: "success",
          //   });
          // } else {
          //   swal("Gagal Menghapus Data!");
          // }

          // if (props.getResponseDeleteUser) {
          //   swal("Berhasil Dihapus!", {
          //     icon: "success",
          //   });
          // } else {
          //   swal("Gagal Menghapus Data!");
          // }
        }, 5000);
      } else {
        swal("Gagal Menghapus Data!");
      }
    });
  };

  const columns = [
    {
      dataField: "id",
      text: "ID",
      headerStyle: () => {
        return { width: "5%" };
      },
      sort: true,
    },
    {
      dataField: "nama",
      text: "Nama",
      sort: true,
    },
    {
      dataField: "alamat",
      text: "Alamat",
      sort: true,
    },
    {
      dataField: "link",
      text: "Action",
      formatter: (rowContent, row) => {
        return (
          <div>
            <Link to={"detail/" + row.id}>
              <Button color="dark" style={{ marginRight: 5 }}>
                <FontAwesomeIcon icon={faInfo} /> Detail
              </Button>
            </Link>

            <Link to={"edit/" + row.id}>
              <Button color="dark" style={{ marginRight: 5 }}>
                <FontAwesomeIcon icon={faEdit} /> Edit
              </Button>
            </Link>

            <Button
              color="dark"
              style={{ marginRight: 5 }}
              onClick={() => handleClick(props, row.id)}
            >
              <FontAwesomeIcon icon={faTrash} /> Delete
            </Button>
          </div>
        );
      },
    },
  ];

  const defaultSorted = [
    {
      dataField: "id",
      order: "asc",
    },
  ];

  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to="/create">
                    <div className="mt-3">
                      <Button color="dark">
                        <FontAwesomeIcon icon={faUserPlus} /> Create User
                      </Button>
                    </div>
                  </Link>
                </Col>
                <Col>
                  <div className="mt-3 float-end">
                    <SearchBar {...props.searchProps} placeHolder="Search" />
                  </div>
                </Col>
              </Row>
              <div className="mt-3">
                <BootstrapTable
                  {...props.baseProps}
                  pagination={paginationFactory()}
                />
              </div>
            </div>
          )}
        </ToolkitProvider>
      ) : (
        <div className="text-center mt-3">
          {props.errorUsersList ? (
            <h1>{props.errorUsersList}</h1>
          ) : (
            <Spinner animation="border" role="status"></Spinner>
          )}
        </div>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    errorUsersList: state.users.errorUsersList,

    getResponseDeleteUser: state.users.getResponseDeleteUser,
    errorResponseDeleteUser: state.users.errorResponseDeleteUser,
  };
};

export default connect(mapStateToProps, null)(TableComponent);
