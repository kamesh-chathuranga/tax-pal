import React, { useState } from "react";
import FeatureCard from "./FeatureCard";
import classes from './Feature.module.css'

const featureData = [
  {
    id: "f1",
    title: "Payroll",
    description:
      "Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    url: "./images/payroll.webp",
    altText: 'Payroll image'
  },
  {
    id: "f2",
    title: "Claim expenses",
    description:
      "All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    url: "./images/expenses.webp",
    altText: 'Claim expenses image'
  },
  {
    id: "f3",
    title: "VAT handling",
    description:
      "We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    url: "./images/vat-returns.webp",
    altText: 'VAT handling image'
  },
  {
    id: "f4",
    title: "Reporting",
    description:
      "Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
    url: "./images/reporting.webp",
    altText: 'Reporting image'
  },
];

const Feature = () => {
  const initialImage = {url: featureData[0].url, altText: featureData[0].altText};
  const [image, setImage] = useState(initialImage);

  const imageUrlHandler = (image) => {
    setImage(image);
  };

  return (
    <div className={classes['fet-container']}>
      <div className={classes.headingText}>
        <h2>Everything you need to run your books.</h2>
        <h3>
          Well everything you need if you aren’t that picky about minor details
          like tax compliance.
        </h3>
      </div>
      <div className={classes.mainContainer}>
        <div className={classes.leftSide}>
          {featureData.map((item) => (
            <FeatureCard
              title={item.title}
              description={item.description}
              url={item.url}
              altText={item.altText}
              onImageChange={imageUrlHandler}
              key={item.id}
            />
          ))}
        </div>
        <div>
          <div className={classes.imageContainer}>
            <img src={image.url} alt={image.altText} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
