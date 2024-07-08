import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
       <ul>
        {/* 
        HTML에서는 <a href="/">Home</a>
        React에서는 <Link to="/">Home</Link> 작성
        a   가 Link와 같고
        href가 to  와 같음
        */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/Contect">Contect</Link></li>
       </ul>
    </nav>
  )
}
export default Navbar;