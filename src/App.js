import React, { Component } from "react";
import {
  JumbotronComponent,
  NavbarComponent,
  TableComponent,
} from "./components";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { CreateUser, DetailUser, EditUser, Home } from "./container";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="">
          <NavbarComponent />
          <JumbotronComponent />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateUser />} />
              <Route path="/detail/:id" element={<DetailUser />} />
              <Route path="/edit/:id" element={<EditUser />} />
              {/* <Route path="/" exact component={Home} />
              <Route path="/create" exact component={CreateUser} /> */}
              {/* <Route path="/detail/:id" exact component={DetailUser} />
              <Route path="/edit/:id" exact component={EditUser} /> */}
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

// export default class App extends Component {
//   render() {
//     return (
//       <div>
//         <NavbarComponent />
//         <JumbotronComponent />
//         <BrowserRouter>
//         <Routes>
//           <Route path="/" exact component={Home} />

//           <Route path="/create" exact component={CreateUser} />

//           <Route path="/detail/:id" exact component={DetailUser} />

//           <Route path="/edit/:id" exact component={EditUser} />
//           </Routes>
//         </BrowserRouter>
//       </div>
//     );
//   }
// }
