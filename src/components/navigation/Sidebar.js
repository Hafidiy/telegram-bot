import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useLocation } from 'react-router'

export default function Sidebar() {
  let { path } = useRouteMatch();
  let location = useLocation();
  let isActive = (route) => {
    return location.pathname === route
  }
  console.log(isActive(`${path}/dashboard`));
  return (
    <div>

      <div className="side-bar">
        <div className="title">
          <div className="logo">Hellobox</div>
        </div>
        <ul className="ul">
          <li className={isActive(`${path}/dashboard`) ? "active" : ""}>
            <Link to={`${path}/dashboard`}>
              <i class="bx bx-category"></i>Dashboard
            </Link>
          </li>
          <li className={isActive(`${path}/user`) ? "active" : ""}>
            <Link to={`${path}/user`}>
              <i class="bx bx-user"></i>User
            </Link>
          </li>
          <li className={isActive(`${path}/patners`) ? "active" : ""}>
            <Link to={`${path}/patners`}>
              <i class="bx bx-store-alt"></i>
              Patners
            </Link>
          </li>
          <li className={isActive(`${path}/prodocts`) ? "active" : ""}>
            <Link to={`${path}/prodocts`}>
              <i class="bx bx-cart-alt"></i>Prodocts
            </Link>
          </li>
          <li className={isActive(`${path}/order`) ? "active" : ""}>
            <Link to={`${path}/order`}>
              <i class="bx bx-transfer-alt"></i>Order
            </Link>
          </li>
          <li className={isActive(`${path}/news`) ? "active" : ""}>
            <Link to={`${path}/news`}>
              <i class="bx bx-news"></i>News
            </Link>
          </li>
          <li className={isActive(`${path}/settings`) ? "active" : ""}>
            <Link to={`${path}/settings`}>
              <i class="bx bx-cog"></i>Settings
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
