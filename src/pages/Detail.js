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
    <div className="border rounded-xl my-6 mx-auto max-w-[85%]">
      {data ? (
        <div className="p-8 items-center rounded-lg shadow">
          <div className="flex flex-col md:flex-row">
            <div className="flex space-x-3 w-full justify-between md:justify-normal">
              <div className="w-28 text-center md:px-2 py-1 my-auto text-sm text-white bg-blue-500 rounded-full uppercase">
                {data.job_type}
              </div>
              <div className="w-36 text-center my-auto md:px-3 py-1 text-sm text-white bg-blue-500 border-4 border-blue-200 rounded-full uppercase">
                {data.job_tenure}
              </div>
            </div>
            <div className="w-full md:text-end my-3.5 md:my-auto text-xl md:text-3xl text-black ">
              <span className="md:text-xl">Salary: </span>
              <span className="font-light text-gray-500 md:text-lg">Rp</span>
              {FormatRupiah(data.salary_min + "")}
              <span className="md:text-lg font-light text-gray-500">
                /Month
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-between my-3 space-x-4">
            <img
              className="object-cover rounded-lg h-12 md:h-20 w-12 md:w-20 my-4"
              src={data.company_image_url}
              alt=""
            ></img>
            <div className="w-full my-auto">
              <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.title}
              </h5>
              <h4 className="text-xl">{data.company_name}</h4>
              <h4 className="text-l">{data.company_city}</h4>
            </div>
          </div>
          <div className="mt-5 font-semibold">Job Description</div>
          <p className="my-3 font-normal text-gray-700 dark:text-gray-400">
            {data.job_description}
          </p>
          <div className="mt-5 font-semibold">Job Qualification</div>
          <p className="my-3 font-normal text-gray-700 dark:text-gray-400">
            {data.job_qualification}
          </p>
        </div>
      ) : (
        <div role="status" className="w-full items-center justify-center my-12">
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Detail;
