import React from "react";
import classes from "./FeatureCard.module.css";

const FeatureCard = (props) => {
  const imageChangeHandler = () => {
    props.onImageChange({ url: props.url, altText: props.altText });
  };

  return (
    <div className={classes.card} onClick={imageChangeHandler}>
      <div className={classes.cardWrap}>
        <h4>{props.title}</h4>
        <p>{props.description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
