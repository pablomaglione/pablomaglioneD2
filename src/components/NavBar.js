import React from "react";

const NavBar = (props) => {
  console.log(props);
  return (
    <ul class="nav nav-pills nav-justified">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Relojes</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Anillos</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Joyas</a>
      </li>
    </ul>
  );
};

export default NavBar;