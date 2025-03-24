import React, { useEffect, useState } from "react";
import { IoMdAnalytics } from "react-icons/io";
import { HiMiniQueueList } from "react-icons/hi2";
import { MdPermContactCalendar } from "react-icons/md";
import "./Service.css";

const Service = () => {
  const [sliderId, setSliderId] = useState(0);

  function handleSlider(id) {
    setSliderId(id);
  }
  useEffect(() => {
    const images = document.querySelectorAll(".sliderContainer img");
    images.forEach((image) => {
      image.style.transform = `translateX(${-58 * sliderId}vw)`;
      console.log(`translateX(${-58 * sliderId}vw) ` + sliderId);
    });
  }, [sliderId]);

  return (
    <div className="container service-container">
      <div className="serv-text">
        <h2>Simplify everyday business tasks.</h2>
        <h4>
          Because you’d probably be a little confused if we suggested you
          complicate your everyday business tasks instead.
        </h4>
      </div>
      <div className="card-container">
        <div
          className={sliderId === 0 ? "ser-card-active" : "ser-card"}
          onClick={() => handleSlider(0)}
        >
          <span>
            <IoMdAnalytics />
          </span>
          <h5>Reporting </h5>
          <h3>
            Stay on top of things with always up-to-date reporting features.
          </h3>
          <p>
            We talked about reporting in the section above but we needed three
            items here, so mentioning it one more time for posterity.
          </p>
        </div>
        <div
          className={sliderId === 1 ? "ser-card-active" : "ser-card"}
          onClick={() => handleSlider(1)}
        >
          <span>
            <HiMiniQueueList />
          </span>
          <h5>Inventory</h5>
          <h3>
            Never lose track of what’s in stock with accurate inventory
            tracking.
          </h3>
          <p>
            We don’t offer this as part of our software but that statement is
            inarguably true. Accurate inventory tracking would help you for
            sure.
          </p>
        </div>
        <div
          className={sliderId === 2 ? "ser-card-active" : "ser-card"}
          onClick={() => handleSlider(2)}
        >
          <span>
            <MdPermContactCalendar />
          </span>
          <h5>Contacts </h5>
          <h3>
            Organize all of your contacts, service providers, and invoices in
            one place.
          </h3>
          <p>
            This also isn’t actually a feature, it’s just some friendly advice.
            We definitely recommend that you do this, you’ll feel really
            organized and professional.
          </p>
        </div>
      </div>
      <div className="sliderContainer">
        <img src="/images/profit-loss.webp" alt="" />

        <img src="/images/inventory.webp" alt="" />

        <img src="/images/contacts.webp" alt="" />
      </div>
    </div>
  );
};

export default Service;
