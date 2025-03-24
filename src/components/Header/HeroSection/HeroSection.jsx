import React from "react";
import style from './HeroSection.module.css'
import { FaPlay } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className={style.heroSection}>
      <div className={style["hero-text"]}>
        <h1>
          Accounting <span className={style.colorText}>made simple</span> for small
          businesses.
        </h1>
      </div>
      <div className={style.subText}>
        <h4>
          Most bookkeeping software is accurate, but hard to use. We make the
          opposite trade-off, and hope you don’t get audited.
        </h4>
      </div>
      <div className={style["btn-container"]}>
        <Link to="/login" className={`btn ${style['free-btn']}`}>
          Get 6 months free
        </Link>
        <Link
          to="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          className={`btn ${style['watch-btn']}`}
        >
          <FaPlay size={10} className={style.playIcon} /> Watch video
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
