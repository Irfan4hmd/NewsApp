import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Newsapp
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li>
                <div className="dropdown">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                   SELECT CATEGORY
                  </button>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <Link className="dropdown-item" to="/business">
          
                    business
                    </Link>
                    <Link className="dropdown-item" to="/entertainment">
                    entertainment
                    </Link>
                    <Link className="dropdown-item" to="/general">
                     general
                    </Link>
                    <Link className="dropdown-item" to="/health">
                    health
                    </Link>
                    <Link className="dropdown-item" to="/science">
                    science
                    </Link>
                    <Link className="dropdown-item" to="/sports">
                    sports
                    </Link>
                    <Link className="dropdown-item" to="/technology">
                    technology
                    </Link>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
