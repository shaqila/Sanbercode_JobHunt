import React from "react";
import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Detail = () => {
  const { state } = useContext(GlobalContext);
  const { FormatRupiah } = state;
  const [data, setData] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${id}`
        );
        setData(res.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="container border bg-white rounded-xl my-6 mx-auto w-auto shadow-md">
      {data ? (
        <div className="p-8 items-center bg-white border border-gray-200 rounded-lg shadow">
          <span className="w-full px-3 py-1 text-sm text-white bg-blue-500 rounded-full uppercase">
            {data.job_type}
          </span>
          <span className="m-2 w-full px-3 py-1 text-sm text-white bg-blue-500 border-4 border-blue-200 rounded-full uppercase">
            {data.job_tenure}
          </span>
          <img
            className="object-cover rounded-lg h-auto w-12 md:w-20 my-4"
            src={data.company_image_url}
            alt=""
          ></img>
          <div className="flex flex-col justify-between mb-10 leading-normal">
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data.title}
            </h5>
            <h4 className="text-xl">{data.company_name}</h4>
            <h4 className="text-l">{data.company_city}</h4>
            <p className="flex-grow w-full text-2xl text-black mt-2">
              <span className="font-light text-gray-500 text-md">Rp</span>
              {FormatRupiah(data.salary_min + "")}
              <span className="text-sm font-light text-gray-500">/Mo</span>
            </p>
          </div>
          <span className="font-semibold">Job Description</span>
          <p className="my-3 font-normal text-gray-700 dark:text-gray-400">
            {data.job_description}
          </p>
          <span className="font-semibold">Job Qualification</span>
          <p className="my-3 font-normal text-gray-700 dark:text-gray-400">
            {data.job_qualification}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Detail;
