import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import { useParams } from "react-router-dom";
import axios from "axios";

const DashboardForm = () => {
  const { state, handleFunction } = useContext(GlobalContext);
  const { input, setInput } = state;
  const { handleInput, handleSubmit } = handleFunction;
  let { IdData } = useParams();

  useEffect(() => {
    if (IdData !== undefined) {
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${IdData}`)
        .then((res) => {
          let resultData = res.data;
          setInput({ ...resultData });
        });
    }
  }, []);

  return (
    <div className="container border bg-white rounded-xl p-6 my-6 w-full">
      <form onSubmit={handleSubmit} className="px-4 py-2">
        <p className="font-bold uppercase">Create Data</p>
        <div className="my-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Job Title :{" "}
          </label>
          <input
            type="text"
            onChange={handleInput}
            name="title"
            value={input.title}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Company Name
          </label>
          <input
            type="text"
            onChange={handleInput}
            name="company_name"
            value={input.company_name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Company City :{" "}
          </label>
          <input
            type="text"
            onChange={handleInput}
            name="company_city"
            value={input.company_city}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Job Description :{" "}
          </label>
          <input
            type="text"
            onChange={handleInput}
            name="job_description"
            value={input.job_description}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Job Qualification :{" "}
          </label>
          <input
            type="text"
            onChange={handleInput}
            name="job_qualification"
            value={input.job_qualification}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Job Type :{" "}
          </label>
          <input
            type="text"
            onChange={handleInput}
            name="job_type"
            value={input.job_type}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Job Status :{" "}
          </label>
          <input
            type="number"
            onChange={handleInput}
            name="job_status"
            value={input.job_status}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Job Tenure :{" "}
          </label>
          <input
            type="text"
            onChange={handleInput}
            name="job_tenure"
            value={input.job_tenure}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Salary Min :{" "}
          </label>
          <input
            type="number"
            onChange={handleInput}
            name="salary_min"
            value={input.salary_min}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <div className="mb-3">
          <label className="block mb-2 text-sm font-medium text-gray-900 ">
            Salary Max :{" "}
          </label>
          <input
            type="number"
            onChange={handleInput}
            name="salary_max"
            value={input.salary_max}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default DashboardForm;
