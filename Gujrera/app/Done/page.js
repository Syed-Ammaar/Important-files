import React from "react";
import Header from "../component/Header";
import "./donekacss.css";

const Ack = () => (
  <div className="full">
    <div className="small">
      <div className="goat">
        <p>
          Your payment has been successfully paid and your acknowledgement
          number is PA/HYDERABAD/118021/0061370/A1
        </p>
        <div className="lastflex">
            <p>Print Application</p>
            <p>Print Reciept</p>
        </div>
      </div>
    </div>
  </div>
);

const Done = () => {
  return (
    <div>
      <Header />
      <Ack />
    </div>
  );
};

export default Done;
