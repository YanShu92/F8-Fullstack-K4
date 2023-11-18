import React from "react";
import ListItems from "./ListItems";
import Payment from "./Payment";
const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Shopping Home</h1>
      <ListItems />
      <Payment />
    </div>
  );
};

export default Home;
