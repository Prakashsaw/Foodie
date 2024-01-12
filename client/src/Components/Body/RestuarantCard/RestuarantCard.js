import React from "react";
import "./RestuarantCart..css";
const RestuarantCard = (props) => {
  console.log(props);
  const { resName, cuisine } = props;
  return (
    <div className="res-card">
      <img
        className="res-card-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/druwjzmfmz7qvepq3bkr"
        alt="card_photo"
      />
      {/* <h3>{props.resName}</h3> */}
      <h3> {resName} </h3>

      <h4>{cuisine}</h4>

      <h4>4.4 star</h4>

      <h4>38 minutes</h4>
    </div>
  );
};

export default RestuarantCard;
