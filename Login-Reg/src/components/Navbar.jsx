import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return <nav>
    <Link to='/'>Home</Link>
    <Link to='/Login'>Login</Link>
    <Link to='/Register'>Register</Link>
  </nav>;
}
