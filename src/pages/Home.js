import React from "react";
import Jumbotron from "../component/Jumbotron";
import Card from "../component/Card";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Jumbotron />
      <div className="flex mx-auto mt-10 w-4/5 justify-between">
        <div className="justify-start text-2xl font-medium"> Job Vacancy</div>
        <div className="justify-end my-auto hover:-translate-y-1 duration-100">
          <Link to="/job-vacancy">See All Job Vacancy &nbsp;&nbsp; &gt; </Link>
        </div>
      </div>
      <div className="mx-auto flex flex-wrap justify-center p-6 gap-10">
        <Card jobs={3} />
      </div>
    </>
  );
};

export default Home;
