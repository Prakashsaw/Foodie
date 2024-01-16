import React from "react";
import { RES_CARD_BASE_URL } from "../utils/constants";
const RestuarantCard = (props) => {
  console.log(props);
  const { resData } = props;
  const { name, cloudinaryImageId, locality, areaName, cuisines, avgRating } =
    resData.info;
  return (
    <div className="res-card">
      <div className="img-card">
        <img
          className="res-card-logo"
          src={RES_CARD_BASE_URL + cloudinaryImageId}
          alt="card_photo"
        />
      </div>

      <div className="info-card">
        <h3> ResName: {name} </h3>

        <h4> Locality: {locality}</h4>

        <h4>Area: {areaName}</h4>

        <h4>Cuisines: {cuisines.join(", ")}</h4>

        <h4>Ratings: {avgRating}</h4>
      </div>
    </div>
  );
};

export default RestuarantCard;
