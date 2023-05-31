import React, { Component } from "react";
class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className="navbar bg-light mb-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <span className="badge bg-secondary rounded-pill">{this.props.counters.length}</span>
        </div>
      </nav>
    );
  }
}

export default Navbar;
