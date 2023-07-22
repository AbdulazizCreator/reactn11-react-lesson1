import { Component } from "react";

import logo from "../assets/images/logo.png";

import "./Header.css";

export class Header extends Component {
  render() {
    return (
      <header>
        <nav className="container">
          <a href="najot-talim.uz">
            {/* <img src="../assets/images/logo.png" alt="" /> */}
            <img src={logo} height={40} alt="Logo" />
          </a>
          <span>Header</span>
          <button className="btn">Login</button>
        </nav>
      </header>
    );
  }
}
