import React from "react";
import { Link, useNavigate } from "react-router-dom";
import profile2 from "../images/profile.png";
//  import './HeaderBar.css'

function HeaderBar() {
  // const navigate = useNavigate();
  return (
    <div class="btn-group">
      <button type="button" class="btn btn-danger">
        Action
      </button>

      <button
        type="button"
        class="btn btn-danger dropdown-toggle dropdown-toggle-split"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ maxWidth: 25 }}
      ></button>

      <ul class="dropdown-menu">
        <li>
          <Link class="dropdown-item" href="#">
            Action
          </Link>
        </li>
        <li>
          <Link class="dropdown-item" href="#">
            Action
          </Link>
        </li>

        <li>
          <Link class="dropdown-item" href="#">
            Action
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default HeaderBar;
