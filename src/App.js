import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import AddTutorial from "./components/add-tutorial.component";
import CancerTable from "./components/cancer-table.component";
import Search from "./components/home-searchbar";
import MakeQGRSTable from "./components/qgrsTable-creator";
import MakeG4HunterTable from "./components/g4HunterTable-creator";
import ShowImage from "./components/show-images";
// import Tutorial from "./components/tutorial.component";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/" className="navbar-brand">
            BioProject
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/cancerData"} className="nav-link">
                Cancer Database
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={"/"} component={Search} />
            <Route exact path={["/", "/cancerData"]} component={CancerTable} />
            <Route
              exact
              path={"/search/query/:param"}
              component={CancerTable}
            />
            <Route
              exact
              path={"/qgrs-details/query/:param"}
              component={MakeQGRSTable}
            />
            <Route
              exact
              path={"/g4hunter-details/query/:param"}
              component={MakeG4HunterTable}
            />
            <Route exact path={"/show-plots/:param"} component={ShowImage} />

            {/* <Route exact path="/add" component={ AddTutorial } />
            <Route path="/tutorials/:id" component={ Tutorial } /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
