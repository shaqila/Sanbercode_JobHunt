import React from "react";
import Jumbotron from "../component/Jumbotron";
import Card from "../component/Card";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <div className="container mx-auto flex flex-wrap justify-center p-6 gap-10">
        <Card />
      </div>
    </>
  );
};

export default Home;
