import React, { Component } from "react";

class NavBar extends Component {
  render() {
    const { totalCounters } = this.props;

    return (
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
          Navbar{" "}
          <span className="badge badge-pill badge-secondary">
            {totalCounters}
          </span>
        </a>
      </nav>
    );
  }
}

export default NavBar;
