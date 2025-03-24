import React from "react";
import { Link } from 'react-router-dom'
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.navBar}>
      <div className={style.leftSection}>
        <div className={style["logo-container"]}>
          <div className={style["logo-circle"]}></div>
          <Link to="/">
            <h3 className={style.logo}>
              Tax<span className={style.colorText}>Pal</span>
            </h3>
          </Link>
        </div>
        <Link to="/features">Features</Link>
        <Link to="/testimonial">Testimonial</Link>
        <Link to="/pricing">Pricing</Link>
      </div>
      <div className={style.rightSection}>
        <Link to="/login">Sign In</Link>
        <Link to="/register" className={style.btn}>
          Get started today
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
