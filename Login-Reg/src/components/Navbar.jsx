import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";


export default function Navbar() {
  return (
    <nav className="fixed-top bg-secondary-subtle">
      <ul className="nav nav-tabs nav-fill">
        <li className="nav-item">
          <Link className="nav-link active" to="/" aria-current="page">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Login" aria-current="page">
            Login
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Register" aria-current="page">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/Contact" aria-current="page">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
