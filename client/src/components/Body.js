import React from "react";
import RestuarantCard from "./RestuarantCard";
import SearchBar from "./Search";
import resList from './../utils/resList';

const Body = () => {
  return (
    <div className="body">
      <div className="search">
        <SearchBar />
      </div>
      <div className="res-container">
        {resList.map((restaurant, index) => (
          <RestuarantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
