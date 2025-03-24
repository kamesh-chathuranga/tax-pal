import React from "react";
import style from './Partners.module.css'

const Partners = () => {
  return (
    <div className={style.partners}>
      <h4>Trusted by these six companies so far</h4>
      <div className={style.logo}>
        <img src="transistor.svg" alt="" />
        <img src="tuple.svg" alt="" />
        <img src="statickit.svg" alt="" />
        <img src="mirage.svg" alt="" />
        <img src="laravel.svg" alt="" />
        <img src="statamic.svg" alt="" />
      </div>
    </div>
  );
};

export default Partners;
